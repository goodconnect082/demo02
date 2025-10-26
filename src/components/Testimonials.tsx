import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: '田中 健太',
      position: 'カスタマーサポート部長',
      company: '株式会社テクノロジーソリューションズ',
      image: '👨‍💼',
      rating: 5,
      text: 'AI Assist Proを導入してから、カスタマーサポートの効率が3倍になりました。夜間の問い合わせにも即座に対応できるようになり、顧客満足度が大幅に向上しています。',
    },
    {
      name: '佐藤 美咲',
      position: 'COO',
      company: 'グローバルコマース株式会社',
      image: '👩‍💼',
      rating: 5,
      text: '多言語対応機能のおかげで、海外展開がスムーズになりました。人件費を70%削減しながら、サポート品質を向上できたのは驚きです。投資対効果が非常に高いソリューションです。',
    },
    {
      name: '鈴木 大輔',
      position: 'CEO',
      company: 'スタートアップベンチャーズ',
      image: '👨‍💻',
      rating: 5,
      text: 'スタートアップの私たちにとって、24時間対応のサポート体制を構築するのは難しいと思っていました。AI Assist Proなら、手頃な価格で高品質なサポートを提供できています。',
    },
    {
      name: '山田 花子',
      position: 'マーケティングディレクター',
      company: 'イノベーション株式会社',
      image: '👩‍🎨',
      rating: 5,
      text: '導入後、顧客からのポジティブなフィードバックが増えました。AIの回答精度が高く、人間が対応しているのと変わらない自然な会話ができています。',
    },
    {
      name: '伊藤 誠',
      position: 'ITマネージャー',
      company: 'エンタープライズソリューションズ',
      image: '👨‍🔧',
      rating: 5,
      text: '既存のCRMシステムとの統合がスムーズで、導入までわずか2週間でした。セキュリティ面も充実しており、安心して利用できています。',
    },
    {
      name: '高橋 由美',
      position: 'カスタマーエクスペリエンス責任者',
      company: 'リテールグループ株式会社',
      image: '👩‍💼',
      rating: 5,
      text: '継続的な学習機能により、時間が経つほど回答精度が向上しています。業界特有の専門用語も理解してくれるので、専門性の高い問い合わせにも対応できます。',
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">お客様の声</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            AI Assist Proを導入した企業様からいただいた、
            リアルな評価と成果をご紹介します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-12 h-12 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">
            信頼される企業様にご利用いただいています
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Fortune 500企業', 'スタートアップ', 'EC事業者', '金融機関', 'SaaS企業'].map((type) => (
              <div
                key={type}
                className="glass-effect px-6 py-3 rounded-lg text-gray-700 dark:text-gray-300 font-medium"
              >
                {type}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
