import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Clock, TrendingUp, Globe, Shield, Cpu } from 'lucide-react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: MessageSquare,
      title: '自然な会話AI',
      description: '最新の自然言語処理技術により、人間のような自然で正確な対話を実現。お客様の質問を深く理解し、的確な回答を提供します。',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Clock,
      title: '24時間365日対応',
      description: '深夜や休日でも休むことなく、いつでもお客様の問い合わせに即座に対応。営業時間を気にせず、グローバルな顧客サポートを実現します。',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: '継続的な学習',
      description: 'AIは対話を重ねるごとに学習し、回答精度が向上。業界特有の用語や顧客の傾向を理解し、よりパーソナライズされた対応を提供します。',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Globe,
      title: '多言語対応',
      description: '50以上の言語に対応し、グローバルな顧客基盤をサポート。リアルタイムで翻訳し、言語の壁を越えた顧客体験を提供します。',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'セキュリティ重視',
      description: 'エンタープライズグレードのセキュリティで顧客データを保護。GDPR、ISO27001に準拠し、安心してご利用いただけます。',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Cpu,
      title: 'シームレスな統合',
      description: '既存のCRM、ヘルプデスク、チャットシステムと簡単に統合。APIを通じて柔軟にカスタマイズでき、既存の業務フローに自然に組み込めます。',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="features" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">革新的な機能</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            AI Assist Proは、最先端のAI技術を活用して、
            顧客サポートを次のレベルへと引き上げます。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '99.9%', label: '稼働率' },
            { value: '< 1秒', label: '平均応答時間' },
            { value: '95%+', label: '顧客満足度' },
            { value: '70%', label: 'コスト削減' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
