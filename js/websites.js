const website_data = [
	{name:"dumb questions", href:"https://dumbquestions.co/"},
	{name:"rat distortion", href:"https://www.ratdistortion.com/"},
	{name:"black star amps", href:"https://www.blackstaramps.com/uk/ranges/ht-pedals"},
	{name:"accu vein", href:"https://www.accuvein.com/"},
	{name:"pigtronix", href:"https://pigtronix.com/"},
	{name:"",href:"https://www.ehx.com/products/voice-box"},
	{name:"",href:"https://www.ehx.com/browse/browserackmount-studio"},
	{name:"",href:"https://www.zvex.com/"},
	{name:"",href:"https://www.jwz.org/about.html"},
	{name:"dnapizza",href:"https://www.dnapizza.com/"},
	{name:"dreamhost",href:"https://www.dreamhost.com/"},
	{name:"pogolinux",href:"https://www.pogolinux.com/"},
	{name:"theleagueofmoveabletype",href:"https://www.theleagueofmoveabletype.com/"},
	{name:"",href:"https://www.edge.org/"},
	{name:"stillhiring",href:"https://stillhiring.org/"},
	{name:"brad fitz",href:"https://bradfitz.com/"},
	{name:"",href:"https://hop.perl.plover.com/"},
	{name:"",href:"https://www.crockford.com/2020.html"},
	{name:"",href:"http://asmjs.org/"},
	{name:"brendan eich",href:"https://brendaneich.com/"},
	{name:"valgrind",href:"https://valgrind.org/"},
	{name:"",href:"https://norvig.com/"},
	{name:"",href:"https://schemers.org/"},
	{name:"",href:"https://www.nickcave.com/"},
	{name:"schoooool",href:"https://schoooool.com/"},
	{name:"lunchtype",href:"https://lunchtype.com/"},
	{name:"frederic brodbeck",href:"http://www.fredericbrodbeck.de/"},
	{name:"cinemetrics",href:"https://cinemetrics.site/?selection=,The%20Matrix"},
	{name:"",href:"https://usemodify.com/"},
	{name:"the content wrangler",href:"https://thecontentwrangler.com/"},
	{name:"",href:"https://developers.google.com/caja"},
	{name:"adsafe",href:"http://www.adsafe.org/"},
	{name:"",href:"https://usemodify.com/"},
	{name:"",href:"https://stued.io/"},
	{name:"",href:"https://needsupply.com/"},
	{name:"",href:"https://actualsource.org/collections"},
	{name:"",href:"https://jeremypettis.tumblr.com/"},
	{name:"",href:"http://lob.tf/impress.html"},
	{name:"",href:"http://primitivehut.eu/"},
	{name:"",href:"https://www.nieves.ch/catalogue"},
	{name:"",href:"http://www.txtbooks.us/"},
	{name:"",href:"http://www.kurtwoerpel.com/"},
	{name:"",href:"https://properties.sc.egov.usda.gov/resales/public/home"},
	{name:"",href:"https://www.moro.es/"},
	{name:"",href:"https://css-transform.moro.es/"},
	{name:"",href:"http://tlstalentagency.com/"},
	{name:"",href:"https://www.driesvannoten.com/"},
	{name:"",href:"https://archive-pdf.tumblr.com/"},
	{name:"",href:"https://rafrennie.com/"},
	{name:"",href:"https://www.sternberg-press.com/all-products/"},
	{name:"",href:"https://www.fascinate.jp/english/"},
	{name:"",href:"https://www.farfetch.com/shopping/men/items.aspx"},
	{name:"",href:"https://magazineworld.jp/"},
	{name:"",href:"https://www.graffiti.org/faq/zines/gz_a-f.html"},
	{name:"",href:"https://archive-pdf.tumblr.com/scans"},
	{name:"",href:"http://www.lepetitarchive.com/"},
	{name:"",href:"https://www.honeyee.com/"},
	{name:"",href:"https://boutiquemags.com/"},
	{name:"",href:"https://www.seditionmagazine.com/"},
	{name:"",href:"https://dustmagazine.com/"},
	{name:"",href:"http://www.artandsmoke.com/"},
	{name:"",href:"https://cxainc.com/artists/"},
	{name:"",href:"https://www.driesvannoten.com/index.php"},
	{name:"",href:"https://www.haiderackermann.com/"},
	{name:"",href:"https://boutiquemags.com/"},
	{name:"",href:"https://aaronlowelldenton.com/"},
	{name:"",href:"https://s-y-n-d-i-c-a-t.eu/"},
	{name:"",href:"http://inescox.com/"},
	{name:"",href:"https://www.defectivebydesign.org/guide/ebooks"},
	{name:"",href:"https://leanpub.com/contact"},
	{name:"",href:"https://kilthub.cmu.edu/"},
	{name:"",href:"https://iterm2.com/index.html"},
	{name:"",href:"https://www.zweikommasieben.ch/"},
	{name:"",href:"https://karlssonwilker.com/"},
	{name:"",href:"https://www.eastsideradio.live/"},
	{name:"",href:"https://scanmap.mobi/NY/"},
	{name:"",href:"https://github.com/pkalogiros/AudioMass/blob/master/src/actions.js"},
	{name:"",href:"http://www.woodt.li/"},
	{name:"",href:"https://www.romapublications.org/index.html"},
	{name:"",href:"http://www.rogerwillems.nl/"},
	{name:"",href:"https://www.landfilleditions.com/"},
	{name:"",href:"https://lot-ek.com/PROJECTS"},
	{name:"",href:"http://www.manystuff.org/"},
	{name:"",href:"https://peer-to-peer-web.com/"},
	{name:"",href:"http://www.angeloplessas.com/index.php?/talismania/"},
	{name:"",href:"http://www.tankboys.biz/"},
	{name:"",href:"https://maximilianmauracher.com/"},
	{name:"",href:"https://p-oo-l.com/studio/"},
	{name:"",href:"http://tobiasfaisst.com/"},
	{name:"",href:"https://www.mohamedbourouissa.com/"},
	{name:"",href:"https://kamelmennour.com/"},
	{name:"",href:"https://www.blumandpoe.com/"},
	{name:"",href:"http://in-fo.co/"},
	{name:"",href:"https://graybits.biz/"},
	{name:"",href:"https://vancewellenstein.com/"},
	{name:"",href:"https://abcdinamo.com/front"},
	{name:"",href:"https://dinamodarkroom.com/"},
	{name:"",href:"https://www.windows16gallery.com/"},
	{name:"",href:"http://thatbushisnotburning.net/"},
	{name:"",href:"https://rahulshinde.com/"},
	{name:"",href:"https://store.xxxi.nyc/collections/all"},
	{name:"",href:"https://www.xxix.co/"},
	{name:"",href:"https://www.at-elier.org/"},
	{name:"",href:"http://ad-wo.com/"},
	{name:"",href:"https://solar.lowtechmagazine.com/"},
	{name:"",href:"https://outofprint.space/"},
	{name:"",href:"https://ursamajorsupercluster.com/"},
	{name:"",href:"https://www.sanctuary.computer/"},
	{name:"",href:"http://www.unti-tled.com/new-york"},
	{name:"",href:"https://nonomori.net/"},
	{name:"",href:"https://yifuzhang.xyz/"},
	{name:"",href:"http://studiolhooq.com/"},
	{name:"",href:"https://ari.school/"},
	{name:"",href:"https://vijaymasharani.com/"},
	{name:"",href:"https://leverarchitecture.com/"},
	{name:"",href:"http://www.inventorypress.com/"},
	{name:"",href:"http://kasper-florio.ch/"},
	{name:"",href:"https://feeeels.com/"},
	{name:"",href:"https://forkspoon.info/"},
	{name:"",href:"https://www.andandandcreative.com/"},
	{name:"",href:"https://www.geowebstore.com/"},
	{name:"",href:"https://threejs.org/"},
	{name:"",href:"https://goodglyphs.com/"},
	{name:"",href:"https://violetoffice.com/"},
	{name:"",href:"https://nemesis.global/"},
	{name:"",href:"https://www.culturedmag.com/"},
	{name:"",href:"http://officemagazine.net/"},
	{name:"",href:"http://moussemagazine.it/"},
	{name:"",href:"https://www.monopol-magazin.de/"},
	{name:"",href:"https://github.com/public-apis/public-apis"},
	{name:"",href:"http://studiocontra.co/"},
	{name:"",href:"http://bastardatype.com/index"},
	{name:"",href:"https://arturu.com/"},
	{name:"",href:"https://jesusgollonet.com/about/"},
	{name:"",href:"https://www.northeastshop.com/"},
	{name:"",href:"https://velvetyne.fr/"},
	{name:"",href:"https://thisislore.com/home"},
	{name:"",href:"https://arturu.com/"},
	{name:"",href:"https://svelte.dev/"},
	{name:"",href:"https://jesusgollonet.com/"},
	{name:"",href:"https://www.soonintokyo.com/#elisava-comic/204"},
	{name:"",href:"https://zutalorsinc.com/#home"},
	{name:"",href:"https://campquiet.com/"},
	{name:"",href:"http://thisisforest.com/"},
	{name:"",href:"http://wool735.com/"},
	{name:"",href:"https://www.richmnisi.com/"},
	{name:"",href:"https://shushushuyyy.com/styling"},
	{name:"",href:"https://www.wcr.org/"},
	{name:"",href:"https://reallook.com/"},
	{name:"",href:"https://masterwiki.how/"},
	{name:"",href:"https://big.dk/#projects"},
	{name:"",href:"https://www.sceneslab.com/projectindex"},
	{name:"",href:"https://soundcloud.com/designofbusiness-businessofdesign"},
	{name:"",href:"https://earth.google.com/web/@45.976559,7.658201,3500a,9000d,35y,270h,0t,0r"},
	{name:"",href:"http://www.weltanschauung.club/"},
	{name:"",href:"https://www.samuelsre.com/"},
	{name:"",href:"https://beige.de/"},
	{name:"",href:"https://minimalzeg.com/"},
	{name:"",href:"https://jesperlandberg.dev/"},
	{name:"",href:"https://www.unnecessaryinventions.com/"},
	{name:"",href:"https://www.dashwoodbooks.com/"},
	{name:"",href:"https://www.diaart.org/"},
	{name:"",href:"https://mastbooks.com/"},
	{name:"",href:"http://www.sendpoints.cn/index.php"},
	{name:"",href:"http://scpf.com/s/"},
	{name:"",href:"http://www.thomashirschhorn.com/"},
	{name:"",href:"https://www.joshkimux.com/index.html"},
	{name:"",href:"https://bureau.cool/"},
	{name:"",href:"http://june-14.com/"},
	{name:"",href:"https://voiceofracism.co.nz/"},
	{name:"",href:"https://ponystep-magazine.com/"},
	{name:"",href:"https://www.olympiagallery.org/about.php"},
	{name:"",href:"https://itbegins.today/"},
	{name:"",href:"http://dxr.zone/"},
	{name:"",href:"https://maximage.biz/"},
	{name:"",href:"https://hammer.to/"},
	{name:"",href:"https://paponp.com/Home"},
	{name:"",href:"http://lamm-kirch.com/"},
	{name:"",href:"https://work.ac/"},
	{name:"",href:"https://www.wkshps.com/"},
	{name:"",href:"https://recentactivity.org.uk/"},
	{name:"",href:"http://panamapapersoffice.com/projects"},
	{name:"",href:"http://www.mickpeter.com/"},
	{name:"",href:"http://gruppemagazine.com/"},
	{name:"",href:"https://sukeban.co.uk/"},
	{name:"",href:"https://www.readingdesign.org/"},
	{name:"",href:"http://avant.org/"},
	{name:"",href:"https://publicrecords.tv/"},
	{name:"",href:"https://dwellerforever.blog/"},
	{name:"",href:"https://visualsociety.ch/"},
	{name:"",href:"https://graybits.biz/"},
	{name:"",href:"http://www.bearbrick.com/"},
	{name:"",href:"http://spaziomaiocchi.com/"},
	{name:"",href:"http://www.andreacaputo.com/"},
	{name:"",href:"https://bureauborsche.com/"},
	{name:"",href:"http://bong.international/"},
	{name:"",href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"},
	{name:"",href:"https://fluxo.design/"},
	{name:"",href:"https://files.design/"},
	{name:"",href:"https://designsystems.international/"},
	{name:"",href:"https://publicrecords.tv/"},
	{name:"",href:"https://forge.medium.com/how-to-become-the-best-in-the-world-at-something-f1b658f93428"},
	{name:"",href:"http://torquetorque.net/"},
	{name:"",href:"https://www.fosterandpartners.com/"},
	{name:"",href:"https://bauerbenski.com/"},
	{name:"",href:"https://liebermannkiepereddemann.de/about"},
	{name:"",href:"https://designagency.io/"},
	{name:"",href:"https://animockup.com/"},
	{name:"",href:"https://vgpena.github.io/winning-with-css-variables/"},
	{name:"",href:"http://stemkoski.github.io/Three.js/"},
	{name:"",href:"https://timrodenbroeker.de/resources/"},
	{name:"",href:"http://www.glyphworld.online/garden/"},
	{name:"",href:"http://www.dildo-generator.com/"},
	{name:"",href:"https://www.smallvictori.es/pricing"},
	{name:"",href:"https://unti-tled-email-archive.smvi.co/"},
	{name:"",href:"https://www.katfukui.com/"},
	{name:"",href:"https://macwright.com/"},
	{name:"",href:"https://soundcloud.com/minimalviolence"},
	{name:"",href:"https://wakawaka.world/"},
	{name:"",href:"http://www.servinglibrary.org/"},
	{name:"",href:"https://aftertheplasterfoundation.queensmuseum.org/"},
	{name:"",href:"https://logicmag.io/"},
	{name:"",href:"https://ourzora.com/"},
	{name:"",href:"https://superrare.co/"},
	{name:"",href:"https://digitalbodies.xyz/"},
	{name:"",href:"https://app.rarible.com/"},
	{name:"",href:"http://www.terrapinbale.com/"},
	{name:"",href:"https://trade.dydx.exchange/margin/ETH-DAI"},
	{name:"",href:"http://bookcoverarchive.com/"},
	{name:"",href:"https://gimmickbook.com/"},
	{name:"",href:"https://shutdown.gallery/"},
	{name:"",href:"http://daywreckers.com/"},
	{name:"",href:"https://www.youtube.com/user/moshe5760"},
	{name:"",href:"https://www.tutorialspoint.com/index.html"},
	{name:"",href:"http://www.paulgraham.com/wealth.html"},
	{name:"",href:"https://influenced.it/"},
	{name:"",href:"https://www.hlorenzo.com/"},
	{name:"",href:"https://innercitydetroit.com/"},
	{name:"",href:"https://soundcloud.com/cryptologypod"},
	{name:"",href:"https://cesium.com/cesiumjs/"},
	{name:"",href:"http://www.kristopherenukejeans.com/"},
	{name:"",href:"https://www.youtube.com/channel/UCvuxPbxeriCTgTi5ET-0gtg"},
	{name:"",href:"https://baseweb.design/"},
	{name:"",href:"https://dydx.exchange/"},
	{name:"",href:"https://www.bitmain.com/"},
	{name:"",href:"https://sophon.ai/site/index.html"},
	{name:"",href:"https://grayscale.co/"},
	{name:"",href:"https://braiins.com/"},
	{name:"",href:"https://slushpool.com/home/?_ga=2.8306096.36447000.1605883183-430066096.1605883183"},
	{name:"",href:"http://everynoise.com/"},
	{name:"",href:"https://medium.com/@lindaxju/predicting-stock-performance-from-quarterly-earnings-conference-calls-1b7aa85b1f2f"},
	{name:"",href:"https://lagatos.com/"},
	{name:"",href:"https://www.vintagecomputing.com/"},
	{name:"",href:"https://clout.nyc/"},
	{name:"",href:"https://travelnoire.com/sundown-town-travel-warning-black-people-visiting-san-antonio"},
	{name:"",href:"https://www.youtube.com/watch?v=yMw73rpJPRA"},
	{name:"",href:"https://www.youtube.com/watch?v=2wVeARnBKyg"},
	{name:"",href:"https://www.kaiostech.com/"},
	{name:"",href:"https://www.generalbytes.com/en/products"},
	{name:"",href:"https://lamassu.is/product/gaia"},
	{name:"",href:"https://www.counter-print.co.uk/collections/all-books/products/shape-grammars"},
	{name:"",href:"https://logicmag.io/care/mike-schwab-on-mainframe-programming-for-the-state-of-illinois/"},
	{name:"",href:"https://logicmag.io/care/jed-wagner-on-being-the-sole-maintainer-of-the-veterans-appeals-system/"},
	{name:"",href:"https://logicmag.io/care/when-you-say-one-thing-but-mean-your-motherboard/"},
	{name:"",href:"https://www.billys-tokyo.net/shop/default.aspx"},
	{name:"",href:"https://www.youtube.com/watch?v=SFA-pAl6Mno"},
	{name:"",href:"https://www.blkmktvintage.com/"},
	{name:"",href:"http://yoworks.com/index.html"},
	{name:"",href:"https://a-cold-wall.com/"},
	{name:"",href:"https://www.microfocus.com/en-us/home"},
	{name:"",href:"https://blog.codinghorror.com/"},
	{name:"",href:"https://slack.engineering/"},
	{name:"",href:"https://github.com/hover-inc/hover-paywalls-browser-extension"},
	{name:"",href:"https://github.com/nathan-149/CustomCrypocurrency/blob/master/gymcoin/blockchain.py"},
	{name:"",href:"https://www.30secondsofcode.org/"},
	{name:"",href:"https://slack.engineering/"},
	{name:"",href:"https://303patterns.com/"},
	{name:"",href:"https://www.babylonjs.com/"},
	{name:"",href:"https://lav.io/"},
	{name:"",href:"https://barendkoolhaas.com/EENWERK-IRMA-BOOM-OFFICE"},
	{name:"",href:"https://deno.land/"},
	{name:"",href:"https://chromeisbad.com/"},
	{name:"",href:"https://twitter.com/myrrlyn"},
	{name:"",href:"https://atarichain.com/documents/atari-white-paper.pdf"},
	{name:"",href:"https://flaviocopes.com/javascript-array/"},
	{name:"",href:"https://github.com/NVlabs/stylegan2"},
	{name:"",href:"https://www.synthesia.io/"},
	{name:"",href:"https://thispersondoesnotexist.com/"},
	{name:"",href:"https://restlessbooks.org"},
	{name:"",href:"https://demystification.bigcartel.com"},
	{name:"",href:"https://canary---yellow.com"},
	{name:"",href:"https://akasha.org"},
	{name:"",href:"https://href.li/?http://ncase.me/simulating/"},
	{name:"",href:"https://www.alexmallis.com/The-1-9-9-9"},
	{name:"",href:"https://www.kevinmcgloughlin.com/"},
	{name:"",href:"https://www.notion.so/shl-vc-5a51d53a9a414780861bbb8ffcc7f586"},
	{name:"",href:"https://shl.vc/apply"},
	{name:"",href:"https://www.rarebreed.vc/"},
	{name:"",href:"https://www.mininch.com/"},
	{name:"",href:"http://www.mapuguaquen.com/"},
	{name:"",href:"https://www.gerardpuxhe.com/"},
	{name:"",href:"http://www.shigerubanarchitects.com/works.html"},
	{name:"",href:"https://www.nikjoo.co.uk/artists-studio-and-home"},
	{name:"",href:"http://www.bekalemoine.com/films.php"},
	{name:"",href:"https://salvalopez.com/"},
	{name:"",href:"http://www.andrew-trotter.com/"},
	{name:"",href:"https://www.m-i-r-a.com/"},
	{name:"",href:"https://mia.archi/"},
	{name:"",href:"https://www.30secondsofcode.org/blog/s/javascript-for-in-for-of-foreach"},
	{name:"",href:"https://www.30secondsofcode.org/blog/s/4-javascript-array-methods"},
	{name:"",href:"https://hackernoon.com/top-24-es6-code-snippets-for-javascript-problems-oy1a348k"},
	{name:"",href:"https://twitter.com/MacConwell/media"},
	{name:"",href:"https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm"},
	{name:"",href:"https://coolors.co"},
	{name:"",href:"https://necolas.github.io/normalize.css/"},
	{name:"",href:"https://css-tricks.com/box-sizing/"},
	{name:"",href:"https://www.parity.io"},
	{name:"",href:"https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f"},
	{name:"",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard"},
	{name:"",href:"https://thepilcrow.net"},
	{name:"",href:"https://thesmartcoder.dev"},
	{name:"",href:"https://www.librarystack.org"},
	{name:"",href:"https://soundcloud.com/rudyslug/sets/nipsey-soulchild-the-marathon-continues"},
	{name:"",href:"https://brumm.af/shadows"},
	{name:"",href:"https://colormixer.web.app/01007115ff623008898f6e095d1e0001/cool"},
	{name:"",href:"https://nomoregoogle.com"},
	{name:"",href:"https://codepen.io/jasonmayes/pen/GRJqgma"},
	{name:"",href:"https://fieldofvision.org"},
	{name:"",href:"https://colormixer.web.app/010432ffff623005ad65b31f18350101/cool"},
	{name:"",href:"https://boniver.withspotify.com"},
	{name:"",href:"https://cafelapetitereine.ch/carte.html"},
	{name:"",href:"https://www.fintechrecruiters.com"},
	{name:"",href:"https://blobmixer.14islands.com"},
	{name:"",href:"https://gruev.space"},
	{name:"",href:"https://www.danielspatzek.com/hunter_gold"},
	{name:"",href:"https://www.vincentsaisset.com"},
	{name:"",href:"https://ludmillamaury.com"},
	{name:"",href:"https://medium.com/intent-media-design/12-lessons-learned-running-a-design-sprint-a4a4c5a963b7"},
	{name:"",href:"https://stefan.lynxdev.io"},
	{name:"",href:"https://ramenforever.com"},
	{name:"",href:"https://graybits.biz"},
	{name:"",href:"https://dnadnadna.design"},
	{name:"",href:"https://brodiekaman.com"},
	{name:"",href:"https://matthewboblet.xyz"},
	{name:"",href:"http://www.douglasfiliak.com"},
	{name:"",href:"https://soundcloud.com/muraddwell/from-me-to-you-part2"},
	{name:"",href:"https://www.alexmallis.com/The-1-9-9-9"},
	{name:"",href:"https://www.kevinmcgloughlin.com/"},
	{name:"",href:"https://www.notion.so/shl-vc-5a51d53a9a414780861bbb8ffcc7f586"},
	{name:"",href:"https://shl.vc/apply"},
	{name:"",href:"https://www.rarebreed.vc/"},
	{name:"",href:"https://www.mininch.com/"},
	{name:"",href:"http://www.mapuguaquen.com/"},
	{name:"",href:"https://www.gerardpuxhe.com/"},
	{name:"",href:"http://www.shigerubanarchitects.com/works.html"},
	{name:"",href:"https://www.nikjoo.co.uk/artists-studio-and-home"},
	{name:"",href:"http://www.bekalemoine.com/films.php"},
	{name:"",href:"https://salvalopez.com/"},
	{name:"",href:"http://www.andrew-trotter.com/"},
	{name:"",href:"https://www.m-i-r-a.com/"},
	{name:"",href:"https://mia.archi/"},
	{name:"",href:"https://www.30secondsofcode.org/blog/s/javascript-for-in-for-of-foreach"},
	{name:"",href:"https://www.30secondsofcode.org/blog/s/4-javascript-array-methods"},
	{name:"",href:"https://hackernoon.com/top-24-es6-code-snippets-for-javascript-problems-oy1a348k"},
	{name:"",href:"https://twitter.com/MacConwell/media"},
	{name:"",href:"https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm"},
	{name:"",href:"https://mschf.xyz"},
	{name:"",href:"https://alexkondov.com/tao-of-react/?ck_subscriber_id=478659530"},
	{name:"",href:"https://www.vectra.ai"},
	{name:"",href:"https://www.trapx.com"},
	{name:"",href:"https://radicle.xyz"},
	{name:"",href:"https://necessarydisorder.wordpress.com"},
	{name:"",href:"https://www.creativeapplications.net"},
	{name:"",href:"https://prostheticknowledge.tumblr.com"},
	{name:"",href:"https://jay-flow.medium.com/node-how-to-create-a-cli-command-line-interface-program-in-node-fde40812d3be"},
	{name:"",href:"https://www.twitch.tv/cozycoding/videos"},
	{name:"",href:"https://www.americanscientist.org/article/computers-that-can-run-backwards"},
	{name:"",href:"https://www.generativefonts.xyz/fonts/"},
	{name:"",href:"https://nan.xyz"},
	{name:"",href:"https://the-brandidentity.com"},
	{name:"",href:"https://hiddenpalace.org"},
	{name:"",href:"https://sci-hub.do"},
	{name:"",href:"https://www.elsevier.com/connect/is-your-company-ready-for-industry-4.0"},
	{name:"",href:"https://pages.cs.wisc.edu/~remzi/OSTEP/"},
	{name:"",href:"https://designbby.com"},
	{name:"",href:"https://safetype.com/index.php"},
	{name:"",href:"https://puebco.us"},
	{name:"",href:"https://cwandt.com"},
	{name:"",href:"https://www.soph.net/shop/"},
	{name:"",href:"https://danielwfletcher.com"},
	{name:"",href:"https://www.vitra.com/en-us/home"},
	{name:"",href:"https://nickmankeydesigns.com"},
	{name:"",href:"https://pearpit.co"},
	{name:"",href:"https://www.plethora-project.com"},
	{name:"",href:"https://www.katevillevoye.com"},
	{name:"",href:"http://www.ladistributrice.ca/catalogue-films/"},
	{name:"",href:"https://www.fontself.com"},
	{name:"",href:"https://antiboredom.github.io/p5.riso/"},
	{name:"",href:"https://wardjanssen.com"},
	{name:"",href:"https://rafaelbarion.com"},
	{name:"",href:"https://cassiatabatinistudio.com"},
	{name:"",href:"https://www.youtube.com/watch?v=fMRzuwlqfzs"},
	{name:"",href:"https://nmap.org"},
	{name:"",href:"https://cirt.net/Nikto2"},
	{name:"",href:"http://whatthe.link"},
	{name:"",href:"https://drop.com"},
	{name:"",href:"https://iconmonstr.com"},
	{name:"",href:"https://feathericons.com"},
	{name:"",href:"https://studiomoniker.com/projects"},
	{name:"",href:"https://puckey.studio"},
	{name:"",href:"http://inner-values.report"},
	{name:"",href:"https://dia.tv/input/"},
	{name:"",href:"https://ecal-typefaces.ch"},
	{name:"",href:"https://ecal.ch/fr/100/homepage#"},
	{name:"",href:"https://www.baenziger-hug.com"},
	{name:"",href:"https://www.baenziger-hug.com"},
	{name:"",href:"https://lava.nl"},
	{name:"",href:"https://lavabeijing.com"},
	{name:"",href:"https://physicsofbeauty.art"},
	{name:"",href:"https://ipinfo.io"},
	{name:"",href:"https://raphaelbastide.com"},
	{name:"",href:"http://sparta3.com"},
	{name:"",href:"https://spacetelevisionandarchitecture.nl/Attention-Economy"},
	{name:"",href:"https://www.pbs.org/show/film-school-shorts-program/"},
	{name:"",href:"https://www.cope-studio.com"},
	{name:"",href:"https://www.thonik.nl/about/"},
	{name:"",href:"https://studiodumbar.com"},
	{name:"",href:"https://dheygere.com"},
	{name:"",href:"https://www.tristanbagot.com/"},
	{name:"",href:"https://www.tristanbagot.com/#connect"},
	{name:"",href:"https://designbby.com"},
	{name:"",href:"https://pyttsx3.readthedocs.io/en/latest/engine.html#the-engine-factory"},
	{name:"",href:"https://www.planbpassport.com/question/"},
	{name:"",href:"https://lawsie.github.io/guizero/"},
	{name:"",href:"https://us.breo.com/products/breo-idream5s-head-massager?currency=USD&variant=35312505356451&gclid=EAIaIQobChMIieq6hsrV8AIVTObjBx2dnAolEAQYASABEgKBKvD_BwE"},
	{name:"",href:"https://www.roandcostudio.com/#11"},
	{name:"",href:"https://commandercoriander.net"},
	{name:"",href:"https://nexoncomputermuseum.org"},
	{name:"",href:"https://www.tylerjamesbangkok.com"},
	{name:"",href:"https://emiliegervais.com/en"},
	{name:"",href:"https://www.studio-job.com"},
	{name:"",href:"https://www.rigetti.com"},
	{name:"",href:"https://proglangdesign.net/#projects"},
	{name:"",href:"https://soundcloud.com/tinywires"},
	{name:"",href:"https://www.cyborgarts.com"},
	{name:"",href:"https://www.radicalxchange.org"},
	{name:"",href:"https://hads.xyz"},
	{name:"",href:"http://www.naimark.net/index.html"},
	{name:"",href:"http://www.kevinwarwick.com"},
	{name:"",href:"http://www.maggieorth.com/index.html"},
	{name:"",href:"https://krebsonsecurity.com"},
	{name:"",href:"https://funprogramming.org"},
	{name:"",href:"https://www.artstation.com/siwoo"},
	{name:"",href:"https://towardsdatascience.com/introduction-to-sentiment-analysis-f623f7d40bfa"},
	{name:"",href:"https://boockup.marco.land"},
	{name:"",href:"https://node.international/#office-for-metropolitan-architecture"},
	{name:"marco",href:"https://marco.land"},
	{name:"",href:"https://plypool.com"},
	{name:"",href:"https://en.mjournal.online"},
	{name:"jangors",href:"https://jangors.com"},
	{name:"veravandeseyp",href:"https://veravandeseyp.com/speaking-across-time/"},
	{name:"femalefreelancedevelopers",href:"https://femalefreelancedevelopers.com"},
	{name:"",href:"https://drop.com/mechanical-keyboards/drops"},
	{name:"",href:"https://www.nastymagazine.com/photography/"},
	{name:"",href:"https://demofestival.com"},
	{name:"",href:"https://demofestival.com/participants"},
	{name:"studiomut",href:"https://studiomut.com"},
	{name:"",href:"https://www.baenziger-hug.com"},
	{name:"",href:"https://ecal.ch/fr/100/homepage#"},
	{name:"",href:"https://dia.tv/project/a-trak-identity/#slide-1"},
	{name:"",href:"https://www.notion.so/Creative-coding-algorithms-techniques-c5550ef2f7574126bdc77b09ed76651b"},
	{name:"necessarydisorder",href:"https://necessarydisorder.wordpress.com"},
	{name:"",href:"https://github.com/CreativeApplicationsNet"},
	{name:"",href:"https://www.arts.ac.uk/creative-computing-institute"},
	{name:"",href:"https://www.pillandpillow.com"},
	{name:"",href:"http://www.minddesign.co.uk/work/worksamples/mind_design_worksamples.pdf"},
	{name:"",href:"http://www.minddesign.co.uk/show.php?id=258&pos=6&cat=12"},
	{name:"",href:"https://www.republique.studio"},
	{name:"",href:"http://code.compartmental.net/minim/"},
	{name:"",href:"https://www.generativehut.com/tutorials"},
	{name:"",href:"https://www.yubico.com/products/"},
	{name:"",href:"https://medium.com/swlh/4-low-priced-services-every-creator-entrepreneur-should-buy-from-day-0-cd1a60594ddf"},
	{name:"",href:"https://search.brave.com/search?q=NYSE%3A+QS&source=desktop"},
	{name:"",href:"https://www.quantumscape.com/"},
	{name:"",href:"https://medium.com/predict/the-end-of-all-plastic-could-finally-be-in-sight-21905bfa185d"},
	{name:"cartha magazine",href:"https://www.carthamagazine.com/issue/5-2/"},
	{name:"",href:"https://jcnaour.com"},
	{name:"tiny buddha",href:"https://tinybuddha.com/blog/afraid-of-what-people-think-free-yourself-by-realizing-how-unimportant-you-are/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+tinybuddha+%28tinybuddha%29"},
	{name:"hoverstates",href:"https://www.hoverstat.es"},
	{name:"bishop sycamore", href:"https://www.complex.com/sports/bishop-sycamore-lies-espn-play-on-national-tv?utm_campaign=later-linkinbio-complexsports&utm_content=later-20166180&utm_medium=social&utm_source=linkin.bio"},
	{name:"ryan milla, my therapy", href:"https://music.apple.com/us/album/mytherapy-ep/1578176000"}, 
	{name: "bigtrav", href:"https://rarible.com/bigtrav"},
	{name:"internet made", href:"https://internet-made.com/"},
	{name:"studio 150", href:"https://studio150.info/#Info"},
	{name:"algorithmic botany", href:"https://algorithmicbotany.org/papers/abop/abop.pdf"},
	{name:"radio garden", href:"https://radio.garden"},
	{name:"broken beats", ahref:"https://brokenbeats.net/"},
	{name:"eco rebels", ahref:"https://www.eco--rebels.com/"},
	{name: "pal catalogue", ahref:"https://pal-catalogue.com/"},
	{name:"monograph books", ahref: "https://www.monographbookwerks.com/books.php"}
	];
const search_results = document.querySelector("#search_results");
const my_search = document.querySelector("#my_search");
const select_div = document.querySelector(".search_and_submit");
const new_section = document.createElement("section");
const filtered_by_name = (website_data,name) => {
	let filtered_name = website_data.filter((x) => { 
		return (x["name"].includes(name))});
	// if (filtered_name.length <= 0){return `"${name}" returns 0 matches`}
	if (name === ""){ alert(`blank searches are not allowable!`); return false;}
	let matches = [];
	filtered_name.forEach((x) => {
		matches.push(x);
	});
	const construct_html = (matches) => {	
		if (matches.length === 1) { let number_of_matches = `found ${matches.length} match for "${name}"`; search_results.innerHTML = number_of_matches;}
		else if (matches.length <= 0) { let number_of_matches = `there are no matches for "${name}"`; search_results.innerHTML = number_of_matches;}
		else { let number_of_matches = `found ${matches.length} matches for "${name}"`; search_results.innerHTML = number_of_matches;} 
		new_section.classList.add("my_searches");
		select_div.appendChild(new_section);
		for (match of matches){
			    let new_h2 = document.createElement("h2");
			    new_h2.innerText = `${match["name"]}`;
			    new_section.appendChild(new_h2);
			    let new_href = document.createElement("a");
			    new_href.setAttribute("href", `${match["href"]}`);
			    new_href.innerText =  `${match["href"]}`;
				new_section.appendChild(new_href);
			}
		};
		construct_html(matches);
	};
// update input field with typed word
const input_tag = document.querySelector("#search_input");
const search_button = document.querySelector("#search_button");
const clear_search = document.querySelector("#clear_search");
/* event handlers for search button */
EVENT_HANDLER:{

}
search_button.addEventListener("click", () => {
	const search_for = input_tag.value;
	filtered_by_name(website_data, search_for);
});
search_button.addEventListener("mouseover", () => {
	search_button.style.background = "#201920";
	search_button.style.color = "#ffffff";
	search_button.innerHTML = "press to run search?";
	search_button.style.transition = " 1.5s all";
});
search_button.addEventListener("mouseout", () => {
	search_button.style.background = "none";
	search_button.style.color = "#201920";
	search_button.style.border = "2px solid black";
	search_button.innerHTML = "search";
	search_button.style.transition = " 1.5s all";
});
/* event handlers for clear search button */
clear_search.addEventListener("click", () => {
	new_section.innerHTML = "";
	new_section.remove(new_section);
	input_tag.value = "";
});	
clear_search.addEventListener("mouseover", () => {
	clear_search.style.background = "#201920";
	clear_search.style.color = "#ffffff";
	clear_search.innerHTML = "press to clear search";
	clear_search.style.transition = " 1.5s all";
});
clear_search.addEventListener("mouseout", () => {
	clear_search.style.background = "none";
	clear_search.style.color = "#201920";
	clear_search.style.border = "2px solid black";
	clear_search.innerHTML = "clear search";
	clear_search.style.transition = " 1.5s all";
});	
// const links_logged = (website_data) => { return website_data.length};







// function links_logged(){const links_logged = website_data.length;return(links_logged);}



// const select_link_area = document.querySelector("#href_list");
// const link_live_here = document.createElement("div");
// function generate_links(website_data){
// 	let link_element;
// 	let stored_links = [];
// 	for (i in website_data){
// 		link_element = `<a id ="added_link" href="${website_data[i]["href"]}" target="_blank">${website_data[i]["name"]}</a>`;
// 		stored_links.push(link_element);
// 	}	
// 	return(stored_links.join(""));
// }
// link_live_here.classList.add("added_links");
// link_live_here.innerHTML = generate_links(website_data);
// select_link_area.appendChild(link_live_here);





