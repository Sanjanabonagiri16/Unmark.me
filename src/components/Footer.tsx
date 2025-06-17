
import { Heart, Mail, MessageCircle, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="text-xl font-bold">Unmark<span className="text-green-400">.me</span></span>
            </div>
            <p className="text-gray-400 text-sm">
              Breaking free from toxic stereotypes. Building authentic connections. 
              Creating a safe space for emotional growth.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Made with care for the brotherhood</span>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-200">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Emotional Check-in</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Mood Tracker</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Real Talk Podcasts</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">BroCademy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Community Circles</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Growth Challenges</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-200">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Mental Health Resources</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Crisis Support</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-200">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@unmark.me</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MessageCircle className="w-4 h-4" />
                <span>Live Chat Support</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Crisis Hotline: 988</span>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-gray-500">
                If you're in crisis, please reach out immediately. 
                You're not alone, and help is available 24/7.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Unmark.me. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
