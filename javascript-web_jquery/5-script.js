$(document).ready(function() {
    
    const line = "<li>Item</li>";

    $("#add_item").on("click", function() {
        $("ul.my_list").append(line);
    });
});
