let count = 0;
$(".submit").click(function() {
    let questionOne = $(".questionOne").val();
    let questionTwo = $(".questionTwo").val();
    count = count + 1;
    $(".counter").text("This quiz has been taken " + count + " times");
if (questionOne <18 && questionTwo === "pink") {
 console.log(1);
}else if (questionOne === "blue" && questionTwo <18) {
console.log(2);
}
});
