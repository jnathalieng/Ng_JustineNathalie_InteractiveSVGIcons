console.log("JS file connected");

const BerryBop = document.querySelector("#Berry-Bop");

function logBerryBopId() {
    console.log(this.id);
}

BerryBop.addEventListener("click", logBerryBopId);

const GrippyGloop = document.querySelector("#GrippyGloop");

function logGrippyGloopId() {
    console.log(this.id);
}

GrippyGloop.addEventListener("click", logGrippyGloopId);

const SunnyPeel = document.querySelector("#Sunny_Peel");

function logSunnyPeelId() {
    console.log(this.id);
}

SunnyPeel.addEventListener("click", logSunnyPeelId);

const TikkiTango = document.querySelector("#TikkiTango");

function logTikkiTangoId() {
    console.log(this.id);
}

TikkiTango.addEventListener("click", logTikkiTangoId);

const AppleDabble = document.querySelector("#Apple_Dabble");

function logAppleDabbleId() {
    console.log(this.id);
}

AppleDabble.addEventListener("click", logAppleDabbleId);

const MystiSwirl = document.querySelector("#Mysti_Swirl");

function logMystiSwirlId() {
    console.log(this.id);
}

MystiSwirl.addEventListener("click", logMystiSwirlId);
