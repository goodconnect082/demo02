import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Twitter, Linkedin, Github, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: '機能', href: '#features' },
      { name: '料金プラン', href: '#pricing' },
      { name: 'お客様の声', href: '#testimonials' },
      { name: 'よくある質問', href: '#faq' },
    ],
    company: [
      { name: '会社概要', href: '#' },
      { name: '採用情報', href: '#' },
      { name: 'ニュース', href: '#' },
      { name: 'ブログ', href: '#' },
    ],
    resources: [
      { name: 'ドキュメント', href: '#' },
      { name: 'API リファレンス', href: '#' },
      { name: 'サポート', href: '#' },
      { name: 'システム状態', href: '#' },
    ],
    legal: [
      { name: '利用規約', href: '#' },
      { name: 'プライバシーポリシー', href: '#' },
      { name: 'セキュリティ', href: '#' },
      { name: 'コンプライアンス', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="text-xl font-bold text-white">
                AI Assist Pro
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              最先端のAI技術で、顧客サポートを革新します。
              24時間365日、高品質な顧客対応を実現。
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span>東京都渋谷区神宮前1-2-3</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary-500" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary-500" />
                <span>info@aiassistpro.jp</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">製品</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">リソース</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">法的情報</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            &copy; {currentYear} AI Assist Pro株式会社. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-primary-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Compliance Badges */}
          <div className="flex items-center space-x-3 text-xs text-gray-500">
            <span className="px-3 py-1 bg-gray-800 rounded">ISO 27001</span>
            <span className="px-3 py-1 bg-gray-800 rounded">SOC 2</span>
            <span className="px-3 py-1 bg-gray-800 rounded">GDPR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
