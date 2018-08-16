let contactList = {};

    contactList["Andy_weir"] = {"firstName" : "Andy", "lastName" : "Weir", "email" : "aweir@msn.com"};
    contactList["Ted Kas"] = {"firstName" : "Ted" , "lastName" : "Kas", "email" : "TKas@gmail.com"};

    console.log(contactList.Andy_weir["email"]);

    contactList.Andy_weir.email = "aw@msn.com";


    console.log(contactList.Andy_weir["email"]);
