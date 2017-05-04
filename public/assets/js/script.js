var isFirst = true,
    num = 1,
    burgerItem = ".burger-item",
    burgerDevouredItem = ".burger-devoured-item";

// Counter for burgers to be devoured
$(burgerItem).each(function() {
    var list = $(this);
    list.attr("start", num);
    num = num + list.find("span").length;
});

// Counter for devoured burgers
$(burgerDevouredItem).each(function() {
    var list = $(this);
    list.attr("start", num);
    num = num + list.find("span").length;
});