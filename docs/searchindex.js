Object.assign(window.search, {"doc_urls":["firstpage.html","jianmo.html"],"index":{"documentStore":{"docInfo":{"0":{"body":1,"breadcrumbs":0,"title":0},"1":{"body":13,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"介绍 我打算在这里记一些学习和比赛的笔记，可能以后还会写一些软件安装的报错处理。 联系我 Github","breadcrumbs":"介绍","id":"0","title":"介绍"},"1":{"body":"数模数据类题目经验\n警告：以下内容均为一个打过几次数模但是成绩依旧很烂的人写的，并且主观成分极高，请带着批判阅读。如果有意见或者补充欢迎联系我一起完善文档。\n赛前准备 第一：知识的学习 对于数据类的题目，需要学习常规的统计方法和机器学习方法。需要注意的是，这两者的区别在于统计方法有良好的数学基础，对于结果有置信区间、假设检验等许多检验方法；而机器学习没有足够的数学支撑，但是有时候更加好用。 书籍/视频推荐： 请自行找统计学和机器学习相关书籍阅读 强烈推荐司守奎《数学建模算法与应用》真的很实用 清风数学建模（油管上有免费的） 第二：建模工具的学习 Excel 不要忽视小小的Excel，实际上一般的数据处理和作图都是用它做的。特别是筛选查找替换等功能一定要会。 SPSSPRO/SPSS 强烈推荐spsspro，有网页版，免费的。这种是开箱即用的软件，也就是自动分析数据。可以让你明白有哪些统计方法。真正比赛的时候可以先把数据喂给它看看效果再编程。不过有以下缺点。 一是分数可能会低（当然啦，都不是自己编程） 二是没有灵活性，有些题目还是不能完全套用模型的 引用一段自己的总结 >这次我还发现了建模或者编程的一大难点。有些预测模型，比如说GM（1,1）和多项式回归，它们能够给出一个预测方程，再根据这个方程计算未来各个时间点的值，让预测很多年之后的数据变得容易。但是有些模型，比如部分的时间序列模型，它只能给出一个递推方程，就是说每次只能往后预测一年，如果想要继续往后预测就要把上一次的预测结果加进数据集，再计算出新的递推方程往后预测。对于这种模型，SPSSPRO或者SPSS往往帮不了我们，因为用它只能预测出后一年的数据，我们只能自己写代码，加一个循环来解决需要预测多步的问题。平常也要多关注一下这类模型，因为这种往往是必须要自己写代码的。 MATLAB 推荐清风数学建模的教程，司守奎那本书里面也有。MATLAB可以用来应付统计方法的编程，但是应对机器学习还是有些吃力。 另外，虽然说天下代码一般抄，但是如果不会读代码，一般抄来的代码也会因为各种原因跑不了:( python 写机器学习的代码可以用python。不过使用机器学习的方法需要学会调参，如果不会调参那误差可能会很大。 word 写作用word就够了，除非有队员会LaTeX。学会用word的分级标题和导航栏，还有公式和图片表格的排版。 第三：对建模比赛的总体把握 其实看看往年题目和论文就可以了，研究一下写作格式。 分工\n理论上是分成建模手、编程手和论文手，不过也可以有其它分工方式。\n建模的本质是 __解决问题__ ，那么可以分为主导者和辅助者。讨论问题后，主导者对问题的解决要有比较清晰的认知，然后把不太重要的事情安排给辅助者做。 主导者需要做 找到合适的模型（通常包括编程） 写作 （只有你对问题的认知是最清晰的，当然是你写作233） 看上去真的很像一人carry全场hhh 辅助者需要做 找资料和数据（其实是个重活，资料真不好找） 画图画表（Excel或者MATLAB） 论文排版 数据处理（查出来的资料总是乱糟糟的，要用Excel把有用的分出来） 如果三个人都对模型有比较清晰的认知并且各有所长，分成建模手、编程手、写作手也是完全没有问题的。这时建模手也相当于上述的主导者，负责做好沟通和推进整个项目：根据团队成员的特点和所长安排任务，分清楚事情的轻重缓急，让整个项目顺利开展。简而言之，主导者的职责是让每个人的每一时刻都有任务可以做，并且能尽量避免返工，让效率最大化。 ps. 分清任务的轻重缓急真的很重要，比如画图画表排版远没有编程重要，因为很多时候只有上一题的编程出结果了才能开始想下一题的思路，如果编程太慢可能会严重影响效率。 比赛时 查数据 宏观数据，比如GDP、森林面积等，可以在国家统计局网站上找到。另外，在一些金融投资的网站和客户端通常也可以查询到一些宏观数据，尤其是经济方面的数据。 其它数据可以找地方志和统计年鉴。 数据来源应该尽量正规。 可以用GPT等AI辅助处理数据。 建模 除了套用书上已有的模型，也可以通过在知网等网站上查别人的论文来拓展思路。当然，如果有能力自己想出一个模型来那是最好了。 其它 提高效率，效率高真不用熬夜 线上交流时QQ群总是会被消息淹没，重要信息最好装到文本文档里发。问题的主导者可以用TXT阐述需要做的事情以及进展。 菜鸡的解决问题流程：想办法套模型------把数据喂给spsspro看看结果是否满意------想办法找到MATLAB对应算法编程（编不出来就算了，直接用spsspro的）------参考（抄）spsspro上的智能分析结果把论文水出来 如此以来，完全可以在什么都不会的情况下写出一篇论文。如果是英文论文，那用百度翻译也差不多够了。。。（","breadcrumbs":"数学建模（数据类题目）","id":"1","title":"数学建模（数据类题目）"}},"length":2,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"2":{"3":{"3":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"_":{"_":{"df":0,"docs":{},"解":{"df":0,"docs":{},"决":{"df":0,"docs":{},"问":{"df":0,"docs":{},"题":{"_":{"_":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"全":{"df":0,"docs":{},"场":{"df":0,"docs":{},"h":{"df":0,"docs":{},"h":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}},"或":{"df":0,"docs":{},"者":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"a":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"等":{"a":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"a":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}}},"breadcrumbs":{"root":{"2":{"3":{"3":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"_":{"_":{"df":0,"docs":{},"解":{"df":0,"docs":{},"决":{"df":0,"docs":{},"问":{"df":0,"docs":{},"题":{"_":{"_":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"c":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"全":{"df":0,"docs":{},"场":{"df":0,"docs":{},"h":{"df":0,"docs":{},"h":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}},"或":{"df":0,"docs":{},"者":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"a":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"等":{"a":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"m":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"a":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}}},"title":{"root":{"df":0,"docs":{}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});