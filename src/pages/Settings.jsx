import { useState } from 'react';
import { Bell, Moon, Globe, Shield, User, Palette } from 'lucide-react';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your account and preferences</p>
      </div>

      {/* Profile Section */}
      <div className="bg-dark-900 border border-gray-800 rounded-xl p-6">
        <div className="flex items-center mb-6">
          <User className="w-5 h-5 text-primary-400 mr-3" />
          <h2 className="text-lg font-semibold text-white">Profile</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
            <input type="text" defaultValue="Sxatlyk" className="w-full px-3 py-2 bg-dark-800 border border-gray-700 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input type="email" defaultValue="satlykbasimov2006@gmail.com" className="w-full px-3 py-2 bg-dark-800 border border-gray-700 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Role</label>
            <input type="text" defaultValue="Admin" disabled className="w-full px-3 py-2 bg-dark-800/50 border border-gray-700 rounded-lg text-sm text-gray-500 cursor-not-allowed" />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-dark-900 border border-gray-800 rounded-xl p-6">
        <div className="flex items-center mb-6">
          <Palette className="w-5 h-5 text-primary-400 mr-3" />
          <h2 className="text-lg font-semibold text-white">Preferences</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-800">
            <div className="flex items-center">
              <Bell className="w-4 h-4 text-gray-500 mr-3" />
              <div>
                <p className="text-sm font-medium text-white">Push Notifications</p>
                <p className="text-xs text-gray-500">Receive alerts about new orders</p>
              </div>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-11 h-6 rounded-full transition-colors ${notifications ? 'bg-primary-600' : 'bg-gray-700'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${notifications ? 'translate-x-6' : 'translate-x-1'} mt-1`} />
            </button>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-800">
            <div className="flex items-center">
              <Moon className="w-4 h-4 text-gray-500 mr-3" />
              <div>
                <p className="text-sm font-medium text-white">Dark Mode</p>
                <p className="text-xs text-gray-500">Use dark theme across the app</p>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-11 h-6 rounded-full transition-colors ${darkMode ? 'bg-primary-600' : 'bg-gray-700'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-1'} mt-1`} />
            </button>
          </div>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <Globe className="w-4 h-4 text-gray-500 mr-3" />
              <div>
                <p className="text-sm font-medium text-white">Language</p>
                <p className="text-xs text-gray-500">Select your preferred language</p>
              </div>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-dark-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-gray-300 focus:outline-none focus:border-primary-500"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="bg-dark-900 border border-gray-800 rounded-xl p-6">
        <div className="flex items-center mb-6">
          <Shield className="w-5 h-5 text-primary-400 mr-3" />
          <h2 className="text-lg font-semibold text-white">Security</h2>
        </div>
        <button className="px-4 py-2 bg-dark-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
          Change Password
        </button>
      </div>
    </div>
  );
}