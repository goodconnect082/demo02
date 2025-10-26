import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const plans = [
    {
      name: 'スターター',
      price: '¥49,800',
      period: '/月',
      description: 'スタートアップや小規模ビジネスに最適',
      features: [
        '月間10,000件の会話',
        '基本的なAI応答機能',
        '5言語対応',
        'メールサポート',
        '基本的な分析レポート',
        'API統合',
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'プロフェッショナル',
      price: '¥149,800',
      period: '/月',
      description: '成長企業向けの包括的なソリューション',
      features: [
        '月間50,000件の会話',
        '高度なAI応答機能',
        '20言語対応',
        '優先サポート（24時間対応）',
        '詳細な分析とインサイト',
        'CRM統合',
        'カスタマイズ可能なワークフロー',
        '専用アカウントマネージャー',
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'エンタープライズ',
      price: 'カスタム',
      period: '',
      description: '大規模組織向けのフルカスタマイズソリューション',
      features: [
        '無制限の会話',
        'エンタープライズAI機能',
        '50+言語対応',
        '専任サポートチーム',
        'カスタム統合',
        'オンプレミス対応可',
        'SLA保証',
        'セキュリティ監査',
        '専用インフラ',
      ],
      popular: false,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">シンプルで透明性のある料金</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ビジネスの規模に合わせて最適なプランをお選びください。
            全プランで無料トライアルをご利用いただけます。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden ${
                plan.popular ? 'ring-4 ring-primary-500 dark:ring-primary-400' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-500 to-blue-600 text-white px-4 py-1 text-sm font-semibold flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span>人気</span>
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${plan.color}`} />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[3rem]">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 dark:text-gray-400 ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.price === 'カスタム' ? 'お問い合わせ' : '無料トライアル開始'}
                </motion.button>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 bg-gradient-to-br ${plan.color} rounded-full p-0.5 text-white`} />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect inline-block px-8 py-6 rounded-xl">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-semibold">全プラン共通：</span>
              30日間無料トライアル・クレジットカード不要・いつでもキャンセル可能
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              年間契約で20%割引 | カスタムプランについてはお気軽にご相談ください
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
