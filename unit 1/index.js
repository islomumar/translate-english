const text = [
    { text: 'about', uz: `haqida, taxminan, to'g'risida` },
    { text: 'afraid', uz: `qo'rqan` },
    { text: 'again', uz: `yana` },
    { text: 'age', uz: `yosh` },
    { text: 'American', uz: 'amerikalik' },
    { text: 'and', uz: 'va' },
    { text: 'art', uz: 'sanat' },
    { text: 'angry', uz: `jaxili chiqan` },
    { text: 'at', uz: `... da, yonida` },
    { text: 'Australian', uz: `Austriyalik` },
    { text: 'blue', uz: `ko'k` },
    { text: 'but', uz: `lekin` },
    { text: 'brother', uz: `aka-uka` },
    { text: 'bed', uz: `kiravat` },
    { text: 'bag', uz: `sumka` },
    { text: 'beautiful', uz: `chiroyli, go'zal` },
    { text: 'big', uz: `katta` },
    { text: 'chicago', uz: `chikago'` },
    { text: 'colour', uz: `bo'yoq` },
    { text: 'cold', uz: `sovuq` },
    { text: 'can', uz: `qila olmoq` },
    { text: 'close', uz: `yopmoq` },
    { text: 'complete', uz: `to'liq, to'la, tugatmoq` },
    { text: 'children', uz: `bolalar` },
    { text: 'chair', uz: `stul` },
    { text: 'comfortable', uz: `shinam, qulay` },
    { text: 'coat', uz: `palto` },
    { text: 'cheap', uz: `arzon` },
    { text: 'country', uz: `mamlakat` },
    { text: 'doctor', uz: `doktor` },
    { text: 'dog', uz: `kuchuk` },
    { text: 'driver', uz: `haydovchi` },
    { text: 'diamond', uz: `olmos` },
    { text: 'english', uz: `inglis` },
    { text: 'early', uz: `erta` },
    { text: 'from', uz: `dan` },
    { text: 'father', uz: `ota` },
    { text: 'favourite', uz: `qiziqtirgan` },
    { text: 'foodball', uz: `futbol` },
    { text: 'friend', uz: `do'st` },
    { text: 'for', uz: `uchun, ...sababli, chunki, negadir` },
    { text: 'good', uz: `yaxshi` },
    { text: 'hungry', uz: `ochiqan` },
    { text: 'here', uz: `mana` },
    { text: 'he', uz: `u o'g'il bolaga` },
    { text: 'heavy', uz: `og'ir, zil-zambil` },
    { text: 'home', uz: `uy` },
    { text: 'her', uz: `uning, qiz bolaga ishlatiladi` },
    { text: 'hot', uz: `issiq` },
    { text: 'interested', uz: `qiziqan` },
    { text: 'I', uz: `men` },
    { text: 'ill', uz: `kasal` },
    { text: 'in', uz: `ichida` },
    { text: 'it', uz: ` hayvon va narsalargi u diyiladi` },
    { text: 'journalist', uz: `jurnalist` },
    { text: 'key', uz: `kalit` },
    { text: 'late', uz: `kech qolmoq` },
    { text: 'look', uz: `qarash, boqish` },
    { text: 'my', uz: `mening` },
    { text: 'mother', uz: `ona` },
    { text: 'married', uz: `uylangan` },
    { text: 'music', uz: `musiqa` },
    { text: 'man', uz: `erkak` },
    { text: 'much', uz: `ko'p, ancha` },
    { text: 'name', uz: `ism` },
    { text: 'negative', uz: `inkor gap` },
    { text: 'nice', uz: `yaxshi, chiroyli` },
    { text: 'not', uz: `yo'q, emas` },
    { text: 'nurse', uz: `hamshira` },
    { text: 'now', uz: `hozir` },
    { text: 'old', uz: `qari` },
    { text: `o'clock`, uz: `soat` },
    { text: `on`, uz: `da ustida` },
    { text: `or`, uz: `yoki` },
    { text: `positive`, uz: `darak gap` },
    { text: `please`, uz: `iltimos` },
    { text: `politic`, uz: `siyosat` },
    { text: `people`, uz: `odamlar` },
    { text: `player`, uz: `sport, o'yinchi` },
    { text: `picture`, uz: `rasm, surat` },
    { text: `rich`, uz: `boy` },
    { text: `student`, uz: `talaba` },
    { text: `sport`, uz: `sport` },
    { text: `swimming`, uz: `suzish` },
    { text: `sister`, uz: `singil` },
    { text: `she`, uz: `u, qizbolaga` },
    { text: `short`, uz: `qisqa` },
    { text: `sentence`, uz: `hukm noma` },
    { text: `school`, uz: `maktab` },
    { text: `swimmer`, uz: `suzuvchi` },
    { text: `sunny`, uz: `quyoshli` },
    { text: `the`, uz: `aniq artikil` },
    { text: `table`, uz: `stol` },
    { text: `tired`, uz: `charchagan` },
    { text: `teacher`, uz: `o'qtuvchi` },
    { text: `those`, uz: `ular` },
    { text: `they`, uz: `ular` },
    { text: `today`, uz: `bugun` },
    { text: `that`, uz: `u` },
    { text: `this`, uz: `bu` },
    { text: `thank`, uz: `rahmat` },
    { text: `tennis`, uz: `tennis` },
    { text: `taxi`, uz: `taksi` },
    { text: `thirsty`, uz: `chanqagan` },
    { text: `true`, uz: `to'g'ri` },
    { text: `toronto`, uz: `toronto` },
    { text: `unit`, uz: `qism` },
    { text: `use`, uz: `ishlatmoq` },
    { text: `very`, uz: `juda, juda ham` },
    { text: `window`, uz: `oyna` },
    { text: `warm`, uz: `iliq` },
    { text: `we`, uz: `biz` },
    { text: `write`, uz: `yozmoq` },
    { text: `weather`, uz: `ob-havo` },
    { text: `work`, uz: `ish` },
    { text: `windy`, uz: `shamoli, izg'irin` },
    { text: `you`, uz: `sen, siz` },
    { text: `year`, uz: `yil` },
    { text: `your`, uz: `sening` },
    { text: `yourself`, uz: `o'zing, o'zinga` },
]