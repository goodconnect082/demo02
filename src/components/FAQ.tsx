import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'AI Assist Proの導入にはどのくらいの期間がかかりますか？',
      answer: 'スターター・プロフェッショナルプランの場合、通常2週間程度で導入が完了します。エンタープライズプランの場合は、カスタマイズの内容によって4-6週間程度かかる場合があります。導入プロセス全体を通じて、専任チームがサポートいたします。',
    },
    {
      question: '既存のシステムと統合できますか？',
      answer: 'はい、AI Assist ProはRESTful APIを提供しており、主要なCRM（Salesforce、HubSpot等）、ヘルプデスクツール（Zendesk、Freshdesk等）、チャットプラットフォームとシームレスに統合できます。カスタム統合が必要な場合も、技術サポートチームが対応いたします。',
    },
    {
      question: 'AIの回答精度はどの程度ですか？',
      answer: '導入初期の段階で85-90%、学習を重ねることで95%以上の精度を実現しています。業界特有の専門用語や製品情報を学習させることで、さらに高い精度での回答が可能になります。AIが回答できない場合は、自動的に人間のオペレーターにエスカレーションされます。',
    },
    {
      question: 'セキュリティ面はどのように対策されていますか？',
      answer: 'AI Assist Proは、エンタープライズグレードのセキュリティを実装しています。データは全て暗号化され、ISO27001、SOC2、GDPRに準拠しています。また、定期的なセキュリティ監査を実施し、お客様のデータを最高レベルで保護しています。オンプレミス展開も可能です。',
    },
    {
      question: '無料トライアル期間中に何ができますか？',
      answer: '30日間の無料トライアル期間中は、選択されたプランの全機能を制限なくご利用いただけます。最大1,000件の会話まで無料で、クレジットカードの登録も不要です。専任のカスタマーサクセスマネージャーが導入をサポートし、最適な設定をお手伝いします。',
    },
    {
      question: '契約後、いつでもプランを変更できますか？',
      answer: 'はい、ビジネスの成長に合わせて、いつでもプランをアップグレード・ダウングレードできます。プラン変更は即座に反映され、料金も日割り計算されます。また、年間契約の場合は20%の割引が適用されますが、月次契約も可能です。',
    },
    {
      question: 'サポート体制について教えてください。',
      answer: 'スタータープランではメールサポート、プロフェッショナルプランでは24時間優先サポート、エンタープライズプランでは専任サポートチームを提供しています。日本語でのサポートも充実しており、技術的な質問から運用のベストプラクティスまで、幅広くサポートいたします。',
    },
    {
      question: 'AIはどのように学習しますか？',
      answer: 'AI Assist Proは、実際の会話データから継続的に学習します。お客様の業界や製品に特化した情報を学習データとして提供していただくことで、より精度の高い回答が可能になります。また、人間のオペレーターによる修正や追加情報も学習に活用されます。機密情報の取り扱いには十分配慮しています。',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-primary-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">よくある質問</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            AI Assist Proについて、お客様からよくいただく質問とその回答をまとめました。
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-primary-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center glass-effect p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
            その他のご質問がありますか？
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            お気軽にお問い合わせください。専門スタッフが丁寧にご回答いたします。
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            お問い合わせ
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
