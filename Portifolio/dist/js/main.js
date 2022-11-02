$(document).ready(() => {
    // Consts
    const HEIGHT_NAVBAR = 200;
$(".BtnQuemSou").click(() => $("html").animate({ scrollTop: $("#QuemSou").offset().top - HEIGHT_NAVBAR }, 0));
$(".BtnProjetos").click(() => $("html").animate({ scrollTop: $("#Projetos").offset().top - HEIGHT_NAVBAR }, 0));
$(".BtnConhecimentos").click(() => $("html").animate({ scrollTop: $("#Conhecimentos").offset().top - HEIGHT_NAVBAR }, 0));
$(".BtnContato").click(() => $("html").animate({ scrollTop: $("#Contato").offset().top - HEIGHT_NAVBAR }, 0));


});