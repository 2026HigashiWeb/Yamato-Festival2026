document.addEventListener('DOMContentLoaded', function() {
    // --- データ定義 ---
    const boothData = { //location不明確認せよ 確認できたChat
        classes: [
            { id: 'c21', category: 'class', name: { ja: '2年1組', en: 'Class 2-1' }, content: { ja: 'Mamoru Fantasy', en: 'Mamoru Fantasy' }, description: { ja: 'えっ、無料でたくさんゲームができる!?某ゲームセンターで悔しい結果だった人!今すぐここで挽回しないと!', en: 'Wait, you can play tons of games for free!? If you had a rough time at that arcade, now’s your chance to make up for it!' }, location: { ja: '2-1教室', en: 'Room 2-1' } },
            { id: 'c22', category: 'class', name: { ja: '2年2組', en: 'Class 2-2' }, content: { ja: '赤いきつねと愉快な仲間たち', en: 'Red Fox and its fun little crew' }, description: { ja: '私たちのクラスでは脱出ゲームを実施します!ミニゲームをクリアし、ラスボスの赤いきつねを倒して脱出を目指しましょう!', en: 'Our class is hosting an escape game! Clear the mini-games, defeat the final boss, Red Fox, and make your escape!' }, location: { ja: '2-2教室', en: 'Room 2-2' } },
            { id: 'c23', category: 'class', name: { ja: '2年3組', en: 'Class 2-3' }, content: { ja: '23RAMBLE!! ~COSPLAY casino~', en: '23RAMBLE!! ~COSPLAY casino~' }, description: { ja: "多種多様なコスプレでSCRAMBLE、誰がディーラーになるかは運次第。今宵は2-3でLET'S casino!", en: "Come to SCRAMBLE dressed in all kinds of fun cosplay! Who’ll be the dealer? It’s all up to luck. Tonight, 2-3 is the place to be—LET’S casino!" }, location: { ja: '2-3教室', en: 'Room 2-3' } },
            { id: 'c24', category: 'class', name: { ja: '2年4組', en: 'Class 2-4' }, content: { ja: 'KUNIHIRO ✕ HUNTER', en: 'KUNIHIRO ✕ HUNTER' }, description: { ja: '司令本部より極秘任務発令。秘宝の眠る遺跡への入口を確認した。狙いを定め、全ての試練を突破し秘宝をつかめ!', en: 'A top-secret mission has just been issued by HQ. We’ve located the entrance to an ancient ruin where a legendary treasure lies hidden. Take aim, overcome every trial, and claim the treasure!' }, location: { ja: '2-4教室', en: 'Room 2-4' } },
            { id: 'c25', category: 'class', name: { ja: '2年5組', en: 'Class 2-5' }, content: { ja: '星祭り', en: 'Star Festival' }, description: { ja: '一歩入れば、そこはお祭り会場!ワクワクするゲームと楽しい景品を用意して、みなさんをお待ちしています。文化祭の思い出作りに是非お立ち寄りください!', en: 'Step inside, and you’ll find yourself in the middle of a festival! We’ve got exciting games and fun prizes waiting for you. Come on by and make some awesome memories at the school festival!' }, location: { ja: '2-5教室', en: 'Room 2-5' } },
            { id: 'c26', category: 'class', name: { ja: '2年6組', en: 'Class 2-6' }, content: { ja: '山東杯 -その一頭に全てを賭けろ-', en: 'Yamato Cup - Put It All on One Horse.' }, description: { ja: 'すべてを賭ける覚悟はあるか。夢を乗せた名馬たちが今、運命のゲートを飛び出す。山東杯、開幕。', en: 'Are you ready to bet it all? The legendary horses carrying our dreams are about to burst through the gates of destiny. The Yamato Cup is officially underway!' }, location: { ja: '2-6教室', en: 'Room 2-6' } },
            { id: 'c31', category: 'class', name: { ja: '3年1組', en: 'Class 3-1' }, content: { ja: 'かわいいだけじゃカフェですか？♥', en: "Can't we be just cafe?" }, description: { ja: '味の美味しさはもちろん、空間にもこだわった本格レトロ空間♥懐かしのメニューをご用意してお待ちしています!', en: 'Not only is the food delicious, but we’ve also put a lot of love into creating an authentic retro atmosphere♥ Come enjoy some nostalgic favorites—we’ll be waiting for you!' }, location: { ja: '1-1室', en: 'Room 1-1' } },
            { id: 'c32', category: 'class', name: { ja: '3年2組', en: 'Class 3-2' }, content: { ja: 'パイレーツ・オブ・トリリアン', en: 'Pirates of Torillian' }, description: { ja: 'ヨーホー♪ここでしか味わえない、お宝級の焼き鳥を食べてみないか？', en: 'Yo-ho♪ Why not eat some treasure-worthy yakitori that you can only find here?' }, location: { ja: '1-2教室', en: 'Room 1-2' } },
            { id: 'c33', category: 'class', name: { ja: '3年3組', en: 'Class 3-3' }, content: { ja: 'とくべチュ、ロス', en: 'Tokubechu,rros' }, description: { ja: 'あなたに"とくべチュ"を♥アイドルが贈る絶品チュロス召し上がれ!', en: 'Here’s a little “Tokubechurros” just for you ♥ Enjoy some delicious churros, served up by our idols!' }, location: { ja: '1-3教室', en: 'Room 1-3' } },
            { id: 'c34', category: 'class', name: { ja: '3年4組', en: 'Class 3-4' }, content: { ja: 'Vamosタコス食すVamos!!', en: 'Vamos, Tacos! Feast on Those Tacos —VAMOS!!' }, description: { ja: 'ガイコツも踊りだす激ウマさ!あの映画の世界観で、ウチのタコスを食すVamos!!', en: 'So good, even the skeletons will dance! Step into a colorful world of music and memories, grab some tacos, Vamos!!' }, location: { ja: '1-4教室', en: 'Room 1-4' } },
            { id: 'c35', category: 'class', name: { ja: '3年5組', en: 'Class 3-5' }, content: { ja: 'M.K.M. ~ソースの香りに誘われて~', en: 'M.K.M. ~Lured by The Aroma of The Sauce.~' }, description: { ja: 'U.F.O.に宣戦布告。M.K.M.始動。M=Mi、K=Ka、M=Mi。三上先生公認(たぶん)。', en: 'A challenge to the U.F.O.. M.K.M. is go. Approved by Mr. Mikami (probably).' }, location: { ja: '1-5教室', en: 'Room 1-5' } },
            { id: 'c36', category: 'class', name: { ja: '3年6組', en: 'Class 3-6' }, content: { ja: '廃校、開講。', en: 'Closed School, Open Class.' }, description: { ja: '山東の廃校が決まり、思い出作りにやってきた卒業生。見捨てられた山東には、怨念が降り積もっていた。真っ暗闇の廃校の中、何も起こらないはずもなく⋯', en: 'Yamato High School is set to close, and former students return to make one last set of memories. But the abandoned school is filled with lingering resentment. In the dark halls, there’s no way nothing could happen…' }, location: { ja: '第1多目的室', en: 'Multipurpose room 1' } },
        ],
        clubs: [
            { id: 'literary', category: 'club', name: { ja: '文芸部', en: 'Literature Club' }, content: { ja: '部誌販売~あなたの一句~', en: 'Club Magazine for Sale ~Your Poem~' }, description: { ja: '文芸部は昨年度と一昨年度の部誌を販売し、来てくださった皆様に無料であなただけの俳句をお詠みします。', en: 'Our Club will be selling our magazines from the past two years, and we’ll also write a haiku just for you—free of charge!' }, location: { ja: '中央廊下・部室', en: 'Central Hallway / Club Room' } },
            { id: 'jrc', category: 'club', name: { ja: 'JRC部', en: 'JRC Club' }, content: { ja: 'LEMONADONATION', en: 'JRC LEMONADE Sale' }, description: { ja: '小児がん支援にむけてレモネードを販売します!アツい山東祭にぴったりな一本!ぜひご購入ください', en: 'We’re selling lemonade to support pediatric cancer patients. The perfect refreshing drink for a hot Yamato Festival—come grab a bottle!' }, location: { ja: '保健室前廊下', en: 'Hallway in front of Nurse\'s Office' } },
            { id: 'home_economics', category: 'club', name: { ja: '家庭科部', en: 'Home Economics Club' }, content: { ja: '恋するeastクッキー', en: 'East Cookie in Love' }, description: { ja: '家庭科部です。プレーン、チョコチップ、ココア、抹茶の4種のクッキーを販売しています。部員一同お待ちしています。', en: 'We’re selling four kinds of cookies: plain, chocolate chip, cocoa, and matcha. We’ll be waiting for you!' }, location: { ja: '保健室前廊下', en: 'Central Hallway' } },
            //{ id: 'inquiry_a9', category: 'club', name: { ja: '探究A9班', en: 'Research Group A9' }, content: { ja: '規格外野菜・果物の販売', en: 'Sale of Non-standard Vegetables & Fruits' }, description: { ja: 'フードロス削減にご協力ください！', en: 'Please cooperate in reducing food loss!' }, location: { ja: '中央廊下', en: 'Central Hallway' } },
            { id: 'go_shogi', category: 'club', name: { ja: '囲碁将棋部', en: 'Go & Shogi Club' }, content: { ja: '青空将棋、青空飲料販売', en: 'Outdoor Shogi & Drink Sales' }, description: { ja: '青空のもとで将棋を指してみませんか!?!?経験者の方も初心者の方も大歓迎です!', en: 'Why not enjoy a game of shogi outdoors!?!? Beginners and experienced players alike are all welcome!' }, location: { ja: '講堂前廊下', en: 'Hallway in front of Auditorium' } },
            { id: 'kendo', category: 'club', name: { ja: '剣道部', en: 'Kendo Club' }, content: { ja: '氷屋けんちゃん', en: 'Ice Shop Ken-chan' }, description: { ja: '毎年大好評の氷屋けんちゃん!剣道部の面子をかけた剣道部伝統のかき氷と玉こんをぜひお買い求めください!!', en: 'The Koriya Ken-chan is back and better than ever! A Kendo Club tradition, our signature shaved ice and tama-konnyaku are made with pride—come grab some and show your support for the Kendo Club!!' }, location: { ja: '武道館前', en: 'In front of Budokan' } },
            { id: 'soccer', category: 'club', name: { ja: 'サッカー部', en: 'Football Club' }, content: { ja: '北欧クレープハーラン堂', en: 'Nordic Crepes: Haaran-do' }, description: { ja: '一枚一枚丁寧に焼き上げるもちもち食感のクレープが人気。甘い系から食事系まで幅広く楽しめるお店です。', en: 'Our chewy crepes are carefully made fresh, one by one, and are a big hit! From sweet treats to savory options, there’s something for everyone to enjoy.' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'handball_m', category: 'club', name: { ja: '男子ハンドボール部', en: 'Men\'s Handball Club' }, content: { ja: 'ハンドメイドフランクフルト', en: 'Handmade frankfurter' }, description: { ja: '※食べると美味しすぎて気絶するおそれがあります。ハンドメイドの美味しさが爆発したフランクフルト、ぜひお越しください。', en: '*Warning: These handmade frankfurters are so delicious, you might just pass out! Come and enjoy an explosion of handmade goodness!' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'handball_wm', category: 'club', name: { ja: '女子ハンドボール部', en: 'Women\'s Handball Club' }, content: { ja: 'Aloha🤙女ハンの南国キッチン🌺', en: 'Aloha🤙 Our Tropical Kitchen🌺' }, description: { ja: '女子ハンドボール部は冷たくて美味しいフルーツポンチを販売します!暑い山東祭にぴったりです!ぜひお越しください♪', en: 'The Girls’ Handball Club is serving up delicious, refreshing fruit punch! It’s the perfect treat for a hot Yamato Festival, so come cool off with us! ♪' }, location: { ja: '体育館 ※8/29(土)のみ', en: 'Gymnasium / Aug 29(Sat) Only' } },
            { id: 'kyudo', category: 'club', name: { ja: '弓道部', en: 'Kyudo Club' }, content: { ja: '的当て', en: 'Archery Target Practice' }, description: { ja: '弓で的あてに挑戦!ルールは超シンプル、当てた分だけお菓子をゲット!たくさん当てて、お菓子をいっぱいゲットしよう', en: 'Try your hand at archery! The rules are super simple: hit the targets and win some snacks! Hit as many as you can and take home a whole bunch of treats!' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'track_field', category: 'club', name: { ja: '陸上部', en: 'Athletics club' }, content: { ja: 'バニラスカッシュどうですかっしゅ', en: 'How about a Vanilla Squash? Sounds squashtastic!' }, description: { ja: '最近暑いんですねっす。こんな暑い夏にはソーダフロートいかがですかっしゅ？ソーダ!ソーダ!ソーダ!飲まないとソーダ(損だ)ね〜', en: 'It’s been pretty hot lately, huh? How about a soda float for this scorching summer? Soda! Soda! Soda! You’d be soda-ly missing out if you don’t try one!' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'basketball', category: 'club', name: { ja: 'バスケットボール部', en: 'Basketball Club' }, content: { ja: 'スプラッシュ・ダンク', en: 'SPLASH DUNK' }, description: { ja: '本格版ラムネ&バスケ部限定ラベルジュースを販売します!シュワっと弾ける爽快感をご賞味あれ!!', en: 'We’re selling authentic ramune and basketball club-exclusive label drinks! Enjoy the refreshing, fizzy burst of flavor!!' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'tennis', category: 'club', name: { ja: '硬式テニス部', en: 'Hard Tennis Club' }, content: { ja: '白玉フルーツポンチ もちもち天国', en: 'Shiratama Fruit Punch — A Paradise of Chewy Goodness!' }, description: { ja: 'ようこそ"もちもち天国"へ🪽🪽白玉×フルーツ×ゼリーのひんやりスイーツを販売します!思わず写真を撮りたくなるような映えもおいしさも満点の1杯です✨️', en: 'Welcome to “Chewy Paradise” 🪽🪽 We’re serving up a refreshing treat packed with shiratama, fruit, and jelly! It’s the perfect mix of deliciousness and Instagram-worthy looks—you’ll definitely want to snap a pic! ✨' }, location: { ja: '体育館 ※8/30(日)のみ', en: 'Gymnasium / Aug 30(Sun) Only' } },
            { id: 'baseball', category: 'club', name: { ja: '野球部', en: 'Baseball Club' }, content: { ja: 'ストラックアウト', en: 'Struck-Out' }, description: { ja: '野球部のストラックアウトに挑戦!君のコントロールを試して高得点を狙え!友達と競って盛り上がろう!', en: 'Take on the Baseball Club’s Strikeout Challenge! Test your control, aim for a high score, and compete with your friends for some extra fun!' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'volleyball', category: 'club', name: { ja: 'バレーボール部', en: 'Volleyball Club' }, content: { ja: 'バレー部 倍倍ワッフル', en: 'Double-Up Waffles' }, description: { ja: 'バレー部のワッフルアイスで暑さをふっとばそう!おいしいひとときをぜひお楽しみください!', en: 'Beat the heat with the Volleyball Club’s waffle ice cream! Enjoy a delicious, refreshing treat and make the most of your day!' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'soft_tennis', category: 'club', name: { ja: 'ソフトテニス部', en: 'Soft Tennis Club' }, content: { ja: '氷屋ソフテニ', en: 'Soft Tennis Ice Shop' }, description: { ja: '暑い文化祭にぴったり!冷たくて美味しいかき氷を用意しました!ぜひ食べに来てください!!', en: 'Perfect for a hot school festival! We’ve got delicious, refreshing shaved ice waiting for you. Come cool off and enjoy a tasty treat!!' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'art', category: 'club', name: { ja: '美術部', en: 'Art Club' }, content: { ja: 'リアルめっちゃカメレオン', en: 'MECCHA CHAMELEON In Reality' }, description: { ja: '人気ゲーム「めっちゃカメレオン」がリアルに!人形をうまく隠して、最後まで正体を見破られずに逃げ切ろう!', en: 'The popular game “Mecha Chameleon” has come to life! Hide your doll carefully and make sure you don’t get spotted until the very end!' }, location: { ja: '美術室', en: 'Art Studio' } },
            { id: 'calligraphy', category: 'club', name: { ja: '書道部', en: 'Calligraphy Club' }, content: { ja: '山東書道パフォーマンス', en: 'Calligraphy Club Performance' }, description: { ja: '青春をイメージした構成にしたので春の風を感じていただければ幸いです!部員募集しているので袴かっこいいと思った方は書道室まで!', en: 'We’ve created this piece around the spirit of youth, so we hope you can feel the refreshing breeze of spring! We’re also looking for new members, so if you think hakama look cool, come visit us in the Calligraphy Room!'}, location: { ja: '書道室', en: 'Calligraphy Studio' } },
            { id: 'photo', category: 'club', name: { ja: '写真部', en: 'Photography Club' }, content: { ja: 'YAMATO PHOTO', en: 'YAMATO PHOTO' }, description: { ja: '東の風景や綺麗な景色、先生方のブロマイドを販売します!フォトスポットもあり、必要に応じて撮影を行います!ぜひお越しください!', en: 'We’re selling photos of Yamato’s scenery and beautiful views, along with bromides of our teachers! We’ll also have a photo spot, and we can take pictures for you if you’d like. Come stop by!' }, location: { ja: '写真室', en: 'Photo Room' } },
            { id: 'broadcasting', category: 'club', name: { ja: '放送部', en: 'Broadcasting Club' }, content: { ja: '山東映画館 -ラムネはじめました。-', en: 'Yamato Cinema — Now Serving Ramune.' }, description: { ja: '放送部が作成した恋愛系などのドラマ・ラジオを上映します♡昔懐かしのラムネや駄菓子を食べながら映画館気分を楽しんでください♪', en: 'AThe Broadcasting Club will be showing dramas and radio shows, including romance stories, all created by our members ♡ Enjoy the movie theater experience while snacking on nostalgic ramune and classic dagashi snacks♪' }, location: { ja: 'ゼミ2', en: 'Seminar 2' } },
            { id: 'mathematic', category: 'club', name: { ja: '探求部理数班数学部門', en: 'Inquiry Club - Mathmatics Dept' }, content: { ja: '積分大会/模試販売', en: 'Integration Competition / Mock Exam Sales' }, description: { ja: '参加者による一対一の積分速解きバトル!また、数学部オリジナル模試を販売します。', en: 'An one-on-one battle to see who can solve integrals the fastest! We’ll also be selling an original mock exam created by the Math Club.' }, location: { ja: 'ゼミ1', en: 'Seminar 1' } },
            { id: 'science', category: 'club', name: { ja: '探究部理数班科学部門', en: 'Inquiry Club - Science Dept.' }, content: { ja: '化学の力でひんやり-冷却パックを作ろう-', en: 'Cool Down with Chemistry — Make Your Own Instant Cold Pack!' }, description: { ja: '冷却反応を用いた冷却パックで「マイナスK」の世界を体験しよう!(冷却パックは差し上げます)', en: 'Experience the world of “Minus K” with a cool pack powered by cooling reactions! Take the cool pack home with you for free!' }, location: { ja: 'ゼミ1', en: 'Seminar 1' } },
            { id: 'library', category: 'club', name: { ja: '図書委員会', en: 'Library Committee' }, content: { ja: '古本市', en: 'Secondhand Book Market' }, description: { ja: '今年も開催!本、雑誌、漫画、CD、DVD、参考書、色々あります!教室も冷えているので、ぜひ立ち寄ってみてください!', en: 'Back again this year! We’ve got books, magazines, manga, CDs, DVDs, study guides, and more! The classroom is nice and cool too, so come stop by!' }, location: { ja: '1-6教室', en: 'Room 1-6' } },
            /*// ★ 追加点
            { id: 'maruimo', category: 'club', name: { ja: '外部企業出店：まる芋様', en: 'Guest Vendor: Maruimo' }, content: { ja: '冷やし焼き芋・クレープ・かき氷', en: 'Sweet Potato, Crepes & Shaved Ice' }, description: { ja: '焼き芋屋さんならではの、冷やし焼き芋だけでなく、クレープやかき氷も販売してくださいます！', en: 'This baked sweet potato vendor will be selling not only their specialty chilled baked sweet potatoes, but also crepes and shaved ice!' }, location: { ja: '昇降口前', en: 'In front of school entrance' } }
            */
        ]
    };

    const translations = {
        ja: {
            heroTitle: "山東祭2026<br>E-AST-", heroSubtitle: "『東東拍子』", infoTitle: "Information", infoDateTitle: "日程", infoDate1: "8月29日 (土)", infoDate2: "8月30日 (日)", infoTimeTitle: "一般公開 時間", infoTime1: "8/29 (土) 10:30 〜 15:00", infoTime2: "8/29 (日) 10:00 〜 14:00", crowdTitle: "リアルタイム混雑状況", crowdLoading: "混雑状況を読み込んでいます...", status_0: "空いています", status_1: "やや混雑", status_2: "大変混雑", scheduleTitle: "Schedule", scheduleDay1Title: "8/29 (Sat)", scheduleDay2Title: "8/30 (Sun)", scheduleDate1: "8月29日(土)", scheduleDate2: "8月30日(日)", scheduleVenueGym: "体育館", scheduleVenueHall: "講堂", eventD1G1: "オープニング", eventD1G2: "H-1 Aブロック", eventD1G3: "H-1 Bブロック", eventD1G4: "一年生ダンス", eventD1G5: "書道パフォーマンス", eventD1G6: "歌うま Aブロック", eventD1G7: "歌うま Bブロック", eventD1G8: "H-1 Cブロック", eventD1G9: "歌うま Cブロック", eventD1A1: "スマブラ大会", eventD1A2: "バンド", eventD2G1: "H-1 Dブロック", eventD2G2: "歌うま Dブロック", eventD2G3: "一年生ダンス", eventD2G4: "歌うま準決勝", eventD2G5: "H-1 決勝", eventD2G6: "融資ダンス", eventD2G7: "チアパフォーマンス" , eventD2G8: "エンディング", eventD2A1: "放送部企画", eventD2A2: "バンド", boothsTitle: "Booths & Exhibits", filterAll: "すべて", filterClass: "クラス", filterClub: "部活・委員会", mapTitle: "School Map", mapTab1F: "1F", mapTab2F: "2F", mapTab3F: "3F", mapTabGym: "体育館", mapDesc: "マップをクリックまたはタップで拡大表示します。", accessTitle: "Access", accessSchoolName: "山形県立山形東高等学校", accessAddressTitle: "住所:", accessAddress: "〒990-0044 山形県山形市緑町1-5-59", accessPhoneTitle: "電話:", accessGmapTitle: "地図で場所を確認", accessGmapButton: "Googleマップで開く", instagramButton: "山東祭 公式Instagramへ", footerText: "© 2025 山形東高校 山東祭実行委員会", boothLocation: "場所:", boothContent: "内容:", researchPostersButton: "本校2年生の探究ポスターはこちら",
        },
        en: {
            heroTitle: "YAMATO Fes 2026<br>E-AST-", heroSubtitle: "'Orb: On the Movements of the Earth'", infoTitle: "Information", infoDateTitle: "Date", infoDate1: "August 29 (Sat)", infoDate2: "August 30 (Sun)", infoTimeTitle: "Public Hours", infoTime1: "Aug 29 (Sat) 10:30 - 15:00", infoTime2: "Aug 30 (Sun) 10:00 - 14:00", crowdTitle: "Real-time Crowd Status", crowdLoading: "Loading crowd status...", status_0: "Available", status_1: "A bit crowded", status_2: "Very crowded", scheduleTitle: "Schedule", scheduleDay1Title: "Aug 29 (Sat)", scheduleDay2Title: "Aug 30 (Sun)", scheduleDate1: "Aug 29 (Sat)", scheduleDate2: "Aug 30 (Sun)", scheduleVenueGym: "Gymnasium", scheduleVenueHall: "Auditorium", eventD1G1: "Opening", eventD1G2: "H-1 Grand Prix Block-A", eventD1G3: "H-1 Grand Prix Block-B", eventD1G4: "1st Year Dance Performance", eventD1G5: "Caligraphy Performance", eventD1G6: "Singing Contest Block-A", eventD1G7: "Singing Contenst Block-B", eventD1G8: "H-1 Grand Prix Block-C", eventD1G6: "Singing Contest Block-C", eventD1A1: "Smash Bros. tournament", eventD1A2: "Band performance",eventD2G1: "H-1 Grand Prix Block-D", eventD2G2: "Singing Contest Block-D", eventD2G3: "1st Year Dance Performance", eventD2G4: "Singing Contest Semifinal", eventD2G5: "H-1 Grand Prix Final", eventD2G6: "Volunteer Dance", eventD2G7: "Cheer Performance", eventD2G9: "Ending", eventD2A1: "Broad Casting Club Project", eventD2A2: "Band Performance", eventD2A3: "Band Performances", boothsTitle: "Booths & Exhibits", filterAll: "All", filterClass: "Class", filterClub: "Clubs & Committees", mapTitle: "School Map", mapTab1F: "1F", mapTab2F: "2F", mapTab3F: "3F", mapTabGym: "Gymnasium", mapDesc: "Click or tap the map to enlarge.", accessTitle: "Access", accessSchoolName: "Yamagata Higashi High School", accessAddressTitle: "Address:", accessAddress: "1-5-59 Midori-cho, Yamagata-shi, Yamagata 990-0044", accessPhoneTitle: "Phone:", accessGmapTitle: "Check the location on the map", accessGmapButton: "Open in Google Maps", instagramButton: "Official Instagram", footerText: "© 2025 Yamagata Higashi High School Festival Committee", boothLocation: "Location:", boothContent: "Content:", researchPostersButton: "View 2nd Year Student Research Posters",
        }
    };

    let currentLang = localStorage.getItem('preferredLanguage') || 'ja';

    // --- 機能別関数 ---

    function translateAllStaticText(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    function updateLangSwitcherUI(lang) {
        const langSwitcherText = document.getElementById('lang-switcher-text');
        if (langSwitcherText) {
            langSwitcherText.textContent = lang === 'ja' ? 'English' : '日本語';
        }
    }

    function setLanguage(lang) {
        if (!['ja', 'en'].includes(lang) || currentLang === lang) return;
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        
        translateAllStaticText(lang);
        updateMapImages();
        updateLangSwitcherUI(lang);
        createAndDisplayBooths();
        window.updateCrowdStatusUI();
    }

    function updateMapImages() {
        const suffix = currentLang === 'en' ? '-En.svg' : '.svg';
        document.getElementById('map-1f').src = '山東祭校内マップ1F' + suffix;
        document.getElementById('map-2f').src = '山東祭校内マップ2F' + suffix;
        document.getElementById('map-3f').src = '山東祭校内マップ3F' + suffix;
        document.getElementById('map-gym').src = '山東祭校内マップ体育館' + suffix;
    }

    let lastReceivedStatuses = {};
    window.updateCrowdStatusUI = function(statuses) {
        if (statuses) lastReceivedStatuses = statuses;
        const grid = document.getElementById('crowd-status-grid');
        if (!grid) return;
        grid.innerHTML = '';
        const allBooths = [...boothData.classes, ...boothData.clubs];
        if (Object.keys(lastReceivedStatuses).length === 0) {
             grid.innerHTML = `<p class="loading-text" data-lang-key="crowdLoading">${translations[currentLang].crowdLoading}</p>`;
             return;
        }
        allBooths.forEach(booth => {
            const statusData = lastReceivedStatuses[booth.id];
            if (statusData) {
                const statusText = translations[currentLang][`status_${statusData.status}`] || '';
                const name = booth.name[currentLang];
                const statusElement = document.createElement('div');
                statusElement.className = 'status-item';
                statusElement.innerHTML = `
                    <span class="status-indicator status-${statusData.status}"></span>
                    <div><p style="font-weight: bold;">${name}</p><p style="font-size: 0.875rem; color: #9ca3af;">${statusText}</p></div>`;
                grid.appendChild(statusElement);
            }
        });
    }

    function createAndDisplayBooths() {
        const boothGrid = document.getElementById('booth-grid');
        if (!boothGrid) return;
        boothGrid.innerHTML = '';
        const allBooths = [...boothData.classes, ...boothData.clubs];
        
        allBooths.forEach(booth => {
            const card = document.createElement('div');
            card.className = 'booth-card floating-card';
            card.dataset.category = booth.category;
            card.innerHTML = `
                <div>
                    <h3 class="font-playfair">${booth.name[currentLang]}</h3>
                    <p>${booth.content[currentLang]}</p>
                </div>
                <div class="booth-details">
                    <p><strong>${translations[currentLang].boothLocation}</strong> ${booth.location[currentLang]}</p>
                    <p><strong>${translations[currentLang].boothContent}</strong> ${booth.content[currentLang]}</p>
                    <p style="margin-top: 0.5rem; font-size: 0.875rem;">${booth.description[currentLang]}</p>
                </div>`;
            boothGrid.appendChild(card);
        });
    }

    let firebaseInitialized = false;
    function initializeFirebase() {
        if (firebaseInitialized) return;
        firebaseInitialized = true;

        const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
            import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
            import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
            import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

            const firebaseConfig = {
                 apiKey: "AIzaSyALh0WOPimnZR2e7HxdSqVIhfdZiNKtyt8",
                 authDomain: "yamato-festival2026.firebaseapp.com",
                 projectId: "yamato-festival2026",
                 storageBucket: "yamato-festival2026.firebasestorage.app",
                 messagingSenderId: "157211375418",
                 appId: "1:157211375418:web:152cefca2e2ffbb5450203",
                 measurementId: "G-T2CQ2ELRVW"
            };

            try {
                const app = initializeApp(firebaseConfig);
                const auth = getAuth(app);
                const db = getFirestore(app);
                
                signInAnonymously(auth).catch(console.error);

                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        const dbPath = \`/artifacts/\${firebaseConfig.projectId}/public/data/crowd-status\`;
                        onSnapshot(collection(db, dbPath), (snapshot) => {
                            const statuses = {};
                            snapshot.forEach((doc) => { statuses[doc.id] = doc.data(); });
                            window.updateCrowdStatusUI(statuses);
                        }, console.error);
                    }
                });
            } catch (error) {
                console.error("Firebase initialization failed:", error);
                const crowdGrid = document.getElementById('crowd-status-grid');
                if(crowdGrid) {
                    crowdGrid.innerHTML = \`<p class="loading-text">混雑状況の取得に失敗しました。</p>\`;
                }
            }
        `;
        document.body.appendChild(script);
    }

    function setupEventListeners() {
        document.getElementById('lang-switcher-btn').addEventListener('click', () => {
            setLanguage(currentLang === 'ja' ? 'en' : 'ja');
        });

        const faders = document.querySelectorAll('.fade-in-section');
        const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    if (entry.target.id === 'crowd-status') {
                        initializeFirebase();
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });
        faders.forEach(fader => appearOnScroll.observe(fader));

        document.getElementById('date-tabs').addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                document.querySelectorAll('#date-tabs button').forEach(t => t.classList.remove('tab-active'));
                e.target.classList.add('tab-active');
                const targetId = e.target.dataset.dateTarget;
                document.querySelectorAll('#schedule-content-container .date-content').forEach(content => {
                    content.classList.toggle('hidden', content.id !== targetId);
                });
            }
        });

        document.getElementById('map-tabs').addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                document.querySelectorAll('#map-tabs button').forEach(t => t.classList.remove('tab-active'));
                e.target.classList.add('tab-active');
                const targetId = e.target.dataset.mapTarget;
                document.querySelectorAll('#map-images .map-image').forEach(image => {
                    image.classList.toggle('hidden', image.id !== targetId);
                });
            }
        });
        
        document.getElementById('filters').addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                document.querySelectorAll('#filters button').forEach(btn => btn.classList.remove('filter-active'));
                e.target.classList.add('filter-active');
                const filter = e.target.dataset.filter;
                document.querySelectorAll('.booth-card').forEach(card => {
                    card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'flex' : 'none';
                });
            }
        });
        
        document.getElementById('booth-grid').addEventListener('click', (e) => {
            const card = e.target.closest('.booth-card');
            if (card) {
                const details = card.querySelector('.booth-details');
                if (details) {
                    details.style.display = details.style.display === 'block' ? 'none' : 'block';
                }
            }
        });

        const modal = document.getElementById('mapModal');
        const modalImage = document.getElementById('modalImage');
        const closeModal = document.getElementById('closeModal');
        document.getElementById('map-images').addEventListener('click', (e) => {
            if (e.target.classList.contains('map-image')) {
                modal.style.display = "flex";
                modalImage.src = e.target.src;
            }
        });
        closeModal.onclick = () => { modal.style.display = "none"; };
        window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };
    }

    function setupStarrySky() {
        const canvas = document.getElementById('starry-sky');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let stars = [];
        const resizeCanvas = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        class Star {
            constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.r = Math.random() * 1.5; this.a = 0.5 + Math.random() * 0.5; this.ac = Math.random() * 0.02 - 0.01; }
            draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(255,255,255, ${this.a})`; ctx.fill(); }
            update() { this.a += this.ac; if (this.a > 1 || this.a < 0) this.ac *= -1; this.draw(); }
        }
        for (let i = 0; i < 200; i++) stars.push(new Star());
        const animate = () => { requestAnimationFrame(animate); ctx.clearRect(0, 0, canvas.width, canvas.height); stars.forEach(s => s.update()); };
        animate();
        const footer = document.querySelector('footer');
        if (!footer) return;
        const footerStars = footer.querySelector('.footer-stars');
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const size = `${Math.random() * 2 + 1}px`;
            star.style.width = size;
            star.style.height = size;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`;
            footerStars.appendChild(star);
        }
    }

    // --- アプリケーションの初期化 ---
    setupEventListeners();
    translateAllStaticText(currentLang);
    updateMapImages();
    updateLangSwitcherUI(currentLang);
    createAndDisplayBooths();

    window.addEventListener('load', function() {
        setupStarrySky();
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }
    });
});

