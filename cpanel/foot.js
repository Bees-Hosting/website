function loadAdSenseScript() {
    let e = document.createElement("script");
    e.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", e.async = !0, document.head.appendChild(e)
}

function updateTopMenuDropdown() {
    let e = document.querySelector("#lnkHeaderHome font");
    e.parentElement.removeChild(e);
    let t = document.getElementById("lnkUserPrefChangeLang");
    t.parentElement.removeChild(t);
    let n = document.getElementById("lnkUserPrefChangePwd");
    n.setAttribute("href", "https://my.freewebs.ml"), n.innerHTML = "Espace client"
}

function insertTopAd() {
    let e = document.createElement("div");
    e.setAttribute("class", "row"), e.innerHTML = '<div class="col-xs-12 col-md-12 text-center"><ins class="adsbygoogle" style="display:block; height: 90px" data-full-width-responsive="true" data-ad-client="ca-pub-2782505154485804" data-ad-slot="6471488519"></ins></div>';
    let t = document.getElementById("content");
    t.insertBefore(e, t.firstChild), (adsbygoogle = window.adsbygoogle || []).push({})
}

function insertBottomAd() {
    let e = document.getElementById("content"),
        t = document.createElement("div");
    t.setAttribute("class", "row"), t.innerHTML = '<div class="col-xs-12 col-md-12"><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2782505154485804" data-ad-slot="6471488519" data-ad-format="auto"></ins></div>', e.appendChild(t), (adsbygoogle = window.adsbygoogle || []).push({})
}

function insertHomeTopAd() {
    let e = document.getElementById("jump-search"),
        t = buildAdSenseAdPanel(6682047901);
    e.insertBefore(t, e.firstChild), (adsbygoogle = window.adsbygoogle || []).push({})
}

function setPremiumUrls() {
    document.querySelectorAll('a[href^="https://ifastnet.com/portal"]').forEach(function(e) {
        e.onclick = function() {
            ga("send", "event", "iFastNet", "Portal")
        }, e.setAttribute("href", "https://ifastnet.com/portal/aff.php?aff=28302")
    }), document.querySelectorAll('a[href="http://ifastnet.com/cpanelpreview2.php"]').forEach(function(e) {
        e.onclick = function() {
            ga("send", "event", "iFastNet", "CpanelPreview")
        }
    }), document.querySelectorAll('form[action^="https://ifastnet.com/portal/domainchecker.php"]').forEach(function(e) {
        e.onsubmit = function() {
            ga("send", "event", "iFastNet", "SearchDomain")
        }
    }), document.querySelectorAll('a[href^="http://tutorials.securesignup.net"]').forEach(function(e) {
        e.setAttribute("href", "https://wiki.freewebs.ml/"),
        e.textContent = "Wiki"
    })
}

function trackUpgradeSubmits() {
    $('a[href^="/panel/modules-new/upgrade-new/act_buynowbutton.php"]').click(function() {
        let e = $("#subdomaintbl").find("td");
        ga("send", "event", "iFastNet", "SubmitUpgradeForm", e.first().find("b").html() + " - " + e[1].textContent, 100 * parseFloat($(e[4]).find("big").html().substr(1)))
    })
}

function insertStatsPanelAds() {
    let e = document.getElementById("stats"),
        t = buildAdSenseAdPanel(3855191122);
    e.insertBefore(t, e.firstChild), (adsbygoogle = window.adsbygoogle || []).push({});
    let n = buildAdSenseAdPanel(3472047746);
    e.appendChild(n), (adsbygoogle = window.adsbygoogle || []).push({})
}

function buildAdSenseAdPanel(e) {
    let t = document.createElement("div");
    return t.setAttribute("class", "panel panel-widget"), t.innerHTML = '<div class="panel-heading widget-heading">Publicité</div><div class="panel-body"><div class="col-xs-12 col-md-12 text-center"><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2782505154485804" data-ad-slot="6471488519" data-ad-format="auto"></ins></div></div>', t
}

function replaceDomainForm() {
    let e = document.querySelector('form[action="https://ifastnet.com/portal/domainchecker.php"]');
    e.addEventListener("submit", function() {
        ga("send", "event", "iFastNet", "SearchDomain")
    }), e.classList.add("form-inline"), Array.from(e.children).forEach(function(e) {
        ("INPUT" === e.nodeName && "hidden" !== e.type || "SELECT" === e.nodeName) && (e.classList.add("form-control"), wrapper = document.createElement("div"), wrapper.classList.add("form-group"), wrapper.style = "margin: 20px; 10px;", e.parentNode.insertBefore(wrapper, e), wrapper.appendChild(e))
    })
}

function addFreeSslMessage() {
    let e = document.querySelector(".body-content .alert");
    for (alertChild of (e.classList.remove("alert-warning"), e.classList.add("alert-info"), e.children))
        if (alertChild.classList.contains("glyphicon")) alertChild.classList.remove("glyphicon-exclamation-sign"), alertChild.classList.add("glyphicon-info-sign");
        else {
            let e = document.createElement("a");
            e.href = "https://my.freewebs.ml/myssl.php", e.target = "_blank", e.innerHTML = "Certificat SSL gratuit", alertChild.innerHTML = "Besoin d'un certificat? Obtenez en un sur l'espace client FreeWebs! ", alertChild.appendChild(e)
        }
}

function getQueryParam(e) {
    var t = e;
    return location.search.substr(1).split("&").some(function(t) {
        return t.split("=")[0] === e && (e = t.split("=")[1])
    }), t == e ? null : e
}
document.addEventListener("DOMContentLoaded", function() {
    loadAdSenseScript(), setPremiumUrls();
    let e = getQueryParam("option");
    "upgrade-new" === e ? trackUpgradeSubmits() : "domains" === e || "subdomains" === e ? document.querySelectorAll('input[value^="Site Builder"], input[value^="SiteBuilder"]').forEach(function(e) {
        e.parentNode.removeChild(e)
    }) : "sslconfigure" === e && addFreeSslMessage(), e ? insertTopAd() : (insertHomeTopAd(), insertStatsPanelAds(), replaceDomainForm()), insertBottomAd(), document.getElementById("imgPoweredByCpanel").parentElement.parentElement.parentElement.style.display = "none", updateTopMenuDropdown()
});