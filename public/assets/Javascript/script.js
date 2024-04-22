$(document).ready(function(){

    $(".homeContentHead").waypoint(function(){
        $(".homeContentHead").addClass(" animate__animated animate__bounceInDown")
    },{offset:"40%"})
    $(".paraContent").waypoint(function(){
        $(".paraContent").addClass(" animate__animated animate__fadeInLeft")
    },{offset:"62%"})
    $(".searchBar").waypoint(function(){
        $(".searchBar").addClass(" animate__animated animate__fadeInLeft")
    },{offset:"70%"})
    $(".onHead").waypoint(function(){
        $(".onHead").addClass("animate__animated animate__fadeInTopLeft")
    },{offset:"50%"})
    $(".OnCol1").waypoint(function(){
        $(".OnCol1").addClass("animate__animated animate__fadeInLeft")
    },{offset:"80%"})
    $(".OnCol2").waypoint(function(){
        $(".OnCol2").addClass("animate__animated animate__fadeInTopLeft")
    },{offset:"80%"})
    $(".OnCol3").waypoint(function(){
        $(".OnCol3").addClass("animate__animated animate__fadeInTopRight")
    },{offset:"80%"})
    $(".OnCol4").waypoint(function(){
        $(".OnCol4").addClass("animate__animated animate__fadeInRight")
    },{offset:"80%"})
    $(".overViewContent").waypoint(function(){
        $(".overViewContent").addClass("animate__animated animate__fadeInRight")
    },{offset:"40%"})
    $(".overView").waypoint(function(){
        $(".overView").addClass("animate__animated animate__fadeInUp")
    },{offset:"90%"})
    $(".overViewImage").waypoint(function(){
        $(".overViewImage").addClass("animate__animated animate__fadeInUp")
    },{offset:"60%"})
    $(".saleHead").waypoint(function(){
        $(".saleHead").addClass("animate__animated animate__rubberBand")
    },{offset:"70%"})
    $(".saleContainer").waypoint(function(){
        $(".saleContainer").addClass("animate__animated animate__fadeInUp"),{offset:"50%"}
    })
    $(".saleContainer").waypoint(function(){
        $(".saleContainer").addClass("animate__animated animate__fadeInTopLeft")
    },{offset:"90%"})
    $(".saleImage1").waypoint(function(){
        $(".saleImage1").addClass("animate__animated animate__fadeInTopLeft")
    },{offset:"70%"})
    $(".saleContainer1").waypoint(function(){
        $(".saleContainer1").addClass("animate__animated animate__fadeInTopRight")
    },{offset:"90%"})
    $(".saleImage2").waypoint(function(){
        $(".saleImage2").addClass("animate__animated animate__fadeInTopRight")
    },{offset:"70%"})
    
});