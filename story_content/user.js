window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script9 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script10 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script11 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script12 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script13 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script14 = function()
{
  const player = GetPlayer();
const trigger = player.GetVar("BarAnimateTrigger");

if(trigger === "All") {

    // GRYFFINDOR
    {
        const pbObject = object("6gstNlT17yW");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("G_LastBarPosition");
        const currentPoints = player.GetVar("G_Points");
        const maxPoints = player.GetVar("G_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("G_LastBarPosition", newScale);
    }

    // HUFFLEPUFF
    {
        const pbObject = object("6KLhJezN9Zu");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("H_LastBarPosition");
        const currentPoints = player.GetVar("H_Points");
        const maxPoints = player.GetVar("H_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("H_LastBarPosition", newScale);
    }

    // RAVENCLAW
    {
        const pbObject = object("5hTWVEpWfRI");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("R_LastBarPosition");
        const currentPoints = player.GetVar("R_Points");
        const maxPoints = player.GetVar("R_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("R_LastBarPosition", newScale);
    }

    // SLYTHERIN
    {
        const pbObject = object("5zWdUKU6Sy7");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("S_LastBarPosition");
        const currentPoints = player.GetVar("S_Points");
        const maxPoints = player.GetVar("S_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("S_LastBarPosition", newScale);
    }
}

}

window.Script15 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script16 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script17 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script18 = function()
{
  const player = GetPlayer();
const trigger = player.GetVar("BarAnimateTrigger");

if(trigger === "All") {

    // GRYFFINDOR
    {
        const pbObject = object("6gstNlT17yW");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("G_LastBarPosition");
        const currentPoints = player.GetVar("G_Points");
        const maxPoints = player.GetVar("G_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("G_LastBarPosition", newScale);
    }

    // HUFFLEPUFF
    {
        const pbObject = object("6KLhJezN9Zu");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("H_LastBarPosition");
        const currentPoints = player.GetVar("H_Points");
        const maxPoints = player.GetVar("H_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("H_LastBarPosition", newScale);
    }

    // RAVENCLAW
    {
        const pbObject = object("5hTWVEpWfRI");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("R_LastBarPosition");
        const currentPoints = player.GetVar("R_Points");
        const maxPoints = player.GetVar("R_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("R_LastBarPosition", newScale);
    }

    // SLYTHERIN
    {
        const pbObject = object("5zWdUKU6Sy7");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("S_LastBarPosition");
        const currentPoints = player.GetVar("S_Points");
        const maxPoints = player.GetVar("S_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("S_LastBarPosition", newScale);
    }
}

}

window.Script19 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script20 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script21 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script22 = function()
{
  const player = GetPlayer();
const trigger = player.GetVar("BarAnimateTrigger");

if(trigger === "All") {

    // GRYFFINDOR
    {
        const pbObject = object("6gstNlT17yW");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("G_LastBarPosition");
        const currentPoints = player.GetVar("G_Points");
        const maxPoints = player.GetVar("G_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("G_LastBarPosition", newScale);
    }

    // HUFFLEPUFF
    {
        const pbObject = object("6KLhJezN9Zu");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("H_LastBarPosition");
        const currentPoints = player.GetVar("H_Points");
        const maxPoints = player.GetVar("H_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("H_LastBarPosition", newScale);
    }

    // RAVENCLAW
    {
        const pbObject = object("5hTWVEpWfRI");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("R_LastBarPosition");
        const currentPoints = player.GetVar("R_Points");
        const maxPoints = player.GetVar("R_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("R_LastBarPosition", newScale);
    }

    // SLYTHERIN
    {
        const pbObject = object("5zWdUKU6Sy7");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("S_LastBarPosition");
        const currentPoints = player.GetVar("S_Points");
        const maxPoints = player.GetVar("S_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("S_LastBarPosition", newScale);
    }
}

}

window.Script23 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script24 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script25 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script26 = function()
{
  const player = GetPlayer();
const trigger = player.GetVar("BarAnimateTrigger");

if(trigger === "All") {

    // GRYFFINDOR
    {
        const pbObject = object("6gstNlT17yW");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("G_LastBarPosition");
        const currentPoints = player.GetVar("G_Points");
        const maxPoints = player.GetVar("G_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("G_LastBarPosition", newScale);
    }

    // HUFFLEPUFF
    {
        const pbObject = object("6KLhJezN9Zu");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("H_LastBarPosition");
        const currentPoints = player.GetVar("H_Points");
        const maxPoints = player.GetVar("H_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("H_LastBarPosition", newScale);
    }

    // RAVENCLAW
    {
        const pbObject = object("5hTWVEpWfRI");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("R_LastBarPosition");
        const currentPoints = player.GetVar("R_Points");
        const maxPoints = player.GetVar("R_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("R_LastBarPosition", newScale);
    }

    // SLYTHERIN
    {
        const pbObject = object("5zWdUKU6Sy7");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("S_LastBarPosition");
        const currentPoints = player.GetVar("S_Points");
        const maxPoints = player.GetVar("S_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("S_LastBarPosition", newScale);
    }
}

}

window.Script27 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script28 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script29 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script30 = function()
{
  const player = GetPlayer();
const trigger = player.GetVar("BarAnimateTrigger");

if(trigger === "All") {

    // GRYFFINDOR
    {
        const pbObject = object("6gstNlT17yW");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("G_LastBarPosition");
        const currentPoints = player.GetVar("G_Points");
        const maxPoints = player.GetVar("G_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("G_LastBarPosition", newScale);
    }

    // HUFFLEPUFF
    {
        const pbObject = object("6KLhJezN9Zu");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("H_LastBarPosition");
        const currentPoints = player.GetVar("H_Points");
        const maxPoints = player.GetVar("H_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("H_LastBarPosition", newScale);
    }

    // RAVENCLAW
    {
        const pbObject = object("5hTWVEpWfRI");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("R_LastBarPosition");
        const currentPoints = player.GetVar("R_Points");
        const maxPoints = player.GetVar("R_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("R_LastBarPosition", newScale);
    }

    // SLYTHERIN
    {
        const pbObject = object("5zWdUKU6Sy7");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("S_LastBarPosition");
        const currentPoints = player.GetVar("S_Points");
        const maxPoints = player.GetVar("S_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("S_LastBarPosition", newScale);
    }
}

}

window.Script31 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script32 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script33 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script34 = function()
{
  const player = GetPlayer();
const trigger = player.GetVar("BarAnimateTrigger");

if(trigger === "All") {

    // GRYFFINDOR
    {
        const pbObject = object("6gstNlT17yW");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("G_LastBarPosition");
        const currentPoints = player.GetVar("G_Points");
        const maxPoints = player.GetVar("G_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("G_LastBarPosition", newScale);
    }

    // HUFFLEPUFF
    {
        const pbObject = object("6KLhJezN9Zu");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("H_LastBarPosition");
        const currentPoints = player.GetVar("H_Points");
        const maxPoints = player.GetVar("H_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("H_LastBarPosition", newScale);
    }

    // RAVENCLAW
    {
        const pbObject = object("5hTWVEpWfRI");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("R_LastBarPosition");
        const currentPoints = player.GetVar("R_Points");
        const maxPoints = player.GetVar("R_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("R_LastBarPosition", newScale);
    }

    // SLYTHERIN
    {
        const pbObject = object("5zWdUKU6Sy7");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("S_LastBarPosition");
        const currentPoints = player.GetVar("S_Points");
        const maxPoints = player.GetVar("S_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("S_LastBarPosition", newScale);
    }
}

}

window.Script35 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script36 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script37 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script38 = function()
{
  const player = GetPlayer();
const trigger = player.GetVar("BarAnimateTrigger");

if(trigger === "All") {

    // GRYFFINDOR
    {
        const pbObject = object("6gstNlT17yW");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("G_LastBarPosition");
        const currentPoints = player.GetVar("G_Points");
        const maxPoints = player.GetVar("G_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("G_LastBarPosition", newScale);
    }

    // HUFFLEPUFF
    {
        const pbObject = object("6KLhJezN9Zu");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("H_LastBarPosition");
        const currentPoints = player.GetVar("H_Points");
        const maxPoints = player.GetVar("H_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("H_LastBarPosition", newScale);
    }

    // RAVENCLAW
    {
        const pbObject = object("5hTWVEpWfRI");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("R_LastBarPosition");
        const currentPoints = player.GetVar("R_Points");
        const maxPoints = player.GetVar("R_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("R_LastBarPosition", newScale);
    }

    // SLYTHERIN
    {
        const pbObject = object("5zWdUKU6Sy7");
        let bar = document.querySelector("[data-model-id='" + pbObject.name + "']");
        const lastScale = player.GetVar("S_LastBarPosition");
        const currentPoints = player.GetVar("S_Points");
        const maxPoints = player.GetVar("S_MaxPoints");
        let newScale = maxPoints > 0 ? currentPoints / maxPoints : 0;

        gsap.set(bar, { scaleY: lastScale, transformOrigin: "bottom center", force3D: true });
        gsap.to(bar, { duration: 1, scaleY: newScale, ease: "power2.out", force3D: true });
        player.SetVar("S_LastBarPosition", newScale);
    }
}

}

window.Script39 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

window.Script40 = function()
{
  var player = GetPlayer();

// Helper: fade in after scaling
function reveal(el) {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 0.2 });
}

// Bar G
var progressBarG = document.querySelector("[data-model-id='6gstNlT17yW']");
if (progressBarG) {
    var G_scale = player.GetVar("G_Points") / player.GetVar("G_MaxPoints");
    gsap.set(progressBarG, { scaleY: G_scale, transformOrigin: "bottom center" });
    reveal(progressBarG);
}

// Bar H
var progressBarH = document.querySelector("[data-model-id='6KLhJezN9Zu']");
if (progressBarH) {
    var H_scale = player.GetVar("H_Points") / player.GetVar("H_MaxPoints");
    gsap.set(progressBarH, { scaleY: H_scale, transformOrigin: "bottom center" });
    reveal(progressBarH);
}

// Bar R
var progressBarR = document.querySelector("[data-model-id='5hTWVEpWfRI']");
if (progressBarR) {
    var R_scale = player.GetVar("R_Points") / player.GetVar("R_MaxPoints");
    gsap.set(progressBarR, { scaleY: R_scale, transformOrigin: "bottom center" });
    reveal(progressBarR);
}

// Bar S
var progressBarS = document.querySelector("[data-model-id='5zWdUKU6Sy7']");
if (progressBarS) {
    var S_scale = player.GetVar("S_Points") / player.GetVar("S_MaxPoints");
    gsap.set(progressBarS, { scaleY: S_scale, transformOrigin: "bottom center" });
    reveal(progressBarS);
}

}

};
