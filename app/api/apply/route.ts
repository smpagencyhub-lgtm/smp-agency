import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

interface ApplyNowFormData {
  stageName: string;
  phone: string;
  instagram?: string;
  country: string;
}

type RateInfo = {
  count: number;
  windowStart: number;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // per IP per window
const rateLimitStore = new Map<string, RateInfo>();

// All application emails will always be delivered to this address.
const APPLICATION_RECIPIENT = "smpagencyhub@gmail.com";

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  const ip =
    (req as NextRequest & { ip?: string }).ip ?? req.headers.get("x-real-ip");
  return ip || "unknown";
}

function isRateLimited(ip: string): boolean {
  if (!ip) return false;

  const now = Date.now();
  const info = rateLimitStore.get(ip);

  if (!info) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return false;
  }

  const elapsed = now - info.windowStart;
  if (elapsed > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (info.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  info.count += 1;
  rateLimitStore.set(ip, info);
  return false;
}

function buildEmailContent(data: ApplyNowFormData) {
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "UTC",
    hour12: true,
  });

  const subject = `New Talent Application – ${data.stageName}`;

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://smpagency.co.uk";

  const text = [
    "SMP Agency – New Talent Application",
    "------------------------------------------------------------",
    "",
    "You have received a new talent application via the SMP Agency website.",
    "",
    "Applicant details:",
    `  • Stage name : ${data.stageName}`,
    `  • Phone      : ${data.phone}`,
    `  • Instagram  : ${data.instagram || "N/A"}`,
    `  • Country    : ${data.country}`,
    "",
    `Submitted at: ${submittedAt} (UTC)`,
    "",
    "This notification was generated automatically by the SMP Agency website.",
  ].join("\n");

  const html = `
    <div style="margin:0;padding:0;background-color:#000000;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;padding:32px 16px;background-color:#000000;">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:640px;background-color:#05010a;border-radius:18px;border:1px solid #27272a;overflow:hidden;">
              <tr>
                <td style="padding:20px 24px 16px;border-bottom:1px solid #27272a;background:linear-gradient(135deg,#000000,#1a0000);">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td style="vertical-align:middle;">
                        <table cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;">
                          <tr>
                            <td style="padding:0 12px 0 0;vertical-align:middle;">
                              <a
                                href="${siteUrl}"
                                target="_blank"
                                style="color:#0e1318;text-decoration:none;display:inline-block;"
                              >
                                <img
                                  src="cid:smp-logo"
                                  alt="SMP Agency"
                                  style="border:none;display:block;outline:none;text-decoration:none;height:32px;width:auto;border-radius:8px;"
                                />
                              </a>
                            </td>
                            <td style="vertical-align:middle;">
                              <p style="margin:0;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ca3af;">
                                SMP AGENCY
                              </p>
                              <h1 style="margin:2px 0 0;font-size:20px;line-height:1.4;color:#e5e7eb;">
                                New Talent Application Received
                              </h1>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td align="right" style="vertical-align:top;white-space:nowrap;font-size:11px;color:#9ca3af;">
                        <span style="display:inline-block;padding:4px 10px;border-radius:999px;background-color:#1a0000;color:#fecaca;border:1px solid #e63946;">
                          Internal notification
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:18px 24px 8px;">
                  <p style="margin:0 0 12px;font-size:13px;line-height:1.6;color:#e5e7eb;">
                    You have received a new application from a prospective creator via the
                    <span style="color:#e63946;">SMP Agency</span> website. The applicant’s details are summarised below.
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:0 24px 16px;">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-radius:12px;background-color:#05010a;border:1px solid #27272a;">
                    <tr>
                      <td style="padding:12px 16px 10px;border-bottom:1px solid #1f2937;">
                        <p style="margin:0;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9ca3af;">
                          Applicant details
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:10px 16px 4px;">
                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;">
                          <tr>
                            <td style="padding:4px 8px 4px 0;font-size:12px;color:#9ca3af;width:130px;">Stage name</td>
                            <td style="padding:4px 0;font-size:14px;color:#f9fafb;font-weight:500;">
                              ${data.stageName}
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:4px 8px 4px 0;font-size:12px;color:#9ca3af;">Phone</td>
                            <td style="padding:4px 0;font-size:14px;color:#f9fafb;">
                              ${data.phone}
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:4px 8px 4px 0;font-size:12px;color:#9ca3af;">Instagram</td>
                            <td style="padding:4px 0;font-size:14px;color:#f9fafb;">
                              ${data.instagram || "N/A"}
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:4px 8px 4px 0;font-size:12px;color:#9ca3af;">Country</td>
                            <td style="padding:4px 0;font-size:14px;color:#f9fafb;">
                              ${data.country}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:0 24px 16px;">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-radius:12px;background-color:#05010a;border:1px solid #27272a;">
                    <tr>
                      <td style="padding:12px 16px 10px;border-bottom:1px solid #1f2937;">
                        <p style="margin:0;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9ca3af;">
                          Submission metadata
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:10px 16px 10px;font-size:12px;line-height:1.7;color:#9ca3af;">
                        <p style="margin:0 0 4px;">
                          Submitted at
                          <span style="color:#e5e7eb;font-weight:500;">${submittedAt} (UTC)</span>
                        </p>
                        <p style="margin:8px 0 0;">
                          This notification was generated automatically by the SMP Agency website.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:14px 24px 18px;border-top:1px solid #27272a;background-color:#05010a;">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;">
                    <tr>
                      <td style="font-size:11px;line-height:1.6;color:#9ca3af;">
                        <p style="margin:0 0 4px;">
                          Please review this application and follow your usual onboarding process if you wish to proceed.
                        </p>
                        <p style="margin:4px 0 0;">
                          If you notice an unusual number of similar submissions, you may wish to review for potential abuse.
                        </p>
                      </td>
                      <td width="130" align="right" style="font-size:10px;color:#9ca3af;white-space:nowrap;padding-left:12px;">
                        <span style="display:inline-block;padding:4px 8px;border-radius:999px;border:1px solid #e63946;background-color:#1a0000;color:#fecaca;">
                          SMP Agency · Internal
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;

  return { subject, text, html };
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        error:
          "You have reached the submission limit. Please wait a few minutes before trying again.",
      },
      { status: 429 },
    );
  }

  let body: ApplyNowFormData;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  const { stageName, phone, instagram, country } = body;

  if (!stageName || !phone || !country) {
    return NextResponse.json(
      { error: "Stage name, phone, and country are required." },
      { status: 400 },
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, APPLY_FROM_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("Missing SMTP configuration environment variables.");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const { subject, text, html } = buildEmailContent({
    stageName: stageName.trim(),
    phone: phone.trim(),
    instagram: instagram?.trim(),
    country: country.trim(),
  });

  try {
    const logoPath = path.join(process.cwd(), "public", "images", "logo.png");

    await transporter.sendMail({
      from: APPLY_FROM_EMAIL || SMTP_USER,
      to: APPLICATION_RECIPIENT,
      subject,
      text,
      html,
      replyTo: APPLY_FROM_EMAIL || SMTP_USER,
      attachments: [
        {
          filename: "SMP-Management-Logo.png",
          path: logoPath,
          cid: "smp-logo",
          contentDisposition: "inline",
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending application email:", error);
    return NextResponse.json(
      { error: "Unable to send your application at this time." },
      { status: 500 },
    );
  }
}
