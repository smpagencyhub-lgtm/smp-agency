'use client';

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    socialMedia: '',
    experience: '',
    message: '',
  });

  const visibleSections = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you soon.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-2xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-center mb-4 ${
            visibleSections.has('apply') ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-white">START YOUR</span>{' '}
          <span className="text-red-600">JOURNEY</span>
        </h2>
        <p
          className={`text-gray-400 text-center mb-12 ${
            visibleSections.has('apply') ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Fill out the form below and we&apos;ll get back to you within 24-48 hours
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            className={`${
              visibleSections.has('apply')
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          >
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
              placeholder="Enter your full name"
            />
          </div>

          <div
            className={`${
              visibleSections.has('apply')
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          >
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              className={`${
                visibleSections.has('apply')
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            >
              <label htmlFor="age" className="block text-sm font-medium mb-2">
                Age *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                required
                min="18"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                placeholder="18+"
              />
            </div>

            <div
              className={`${
                visibleSections.has('apply')
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            >
              <label htmlFor="experience" className="block text-sm font-medium mb-2">
                Experience Level *
              </label>
              <select
                id="experience"
                name="experience"
                required
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
              >
                <option value="">Select experience</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="experienced">Experienced</option>
              </select>
            </div>
          </div>

          <div
            className={`${
              visibleSections.has('apply')
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          >
            <label htmlFor="socialMedia" className="block text-sm font-medium mb-2">
              Social Media Handles
            </label>
            <input
              type="text"
              id="socialMedia"
              name="socialMedia"
              value={formData.socialMedia}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
              placeholder="@yourhandle"
            />
          </div>

          <div
            className={`${
              visibleSections.has('apply')
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          >
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Tell Us About Yourself *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 resize-none"
              placeholder="Share your background, interests, and why you want to join..."
            />
          </div>

          <div
            className={`${
              visibleSections.has('apply')
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          >
            <button
              type="submit"
              className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
