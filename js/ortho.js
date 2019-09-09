const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const center = document.querySelector("#center");

const camera = new CSSCamera("#space");
camera.viewportEl.style.backgroundColor = "white";
camera.focus(center);
camera.update(0).then(async () => {
  await camera.update(1000);

  camera.rotation = [55, 0, 0];

  await camera.update(1000);

  camera.rotation = [55, 0, -45];
  camera.scale = [2, 2, 2];
  camera.viewportEl.style.backgroundColor = "black";
  await camera.update(2000, {
    property: "transform, background-color",
    timingFunction: "ease-out, linear",
    delay: "0ms, 0ms"
  });

  // Controls after init
  const Axes = eg.Axes;
  const PanInput = Axes.PanInput;
  const axes = new Axes({
    x: { range: [-400, 400] },
    y: { range: [-150, 250] }
  }, { deceleration: 0.004 }, { x: 0, y: 0 });
  const panInput = new PanInput(".cc-viewport", {
    scale: [0.3, 0.3],
  });

  axes.on({
    "change": evt => {
      camera.translateLocal(-evt.delta.x, -evt.delta.y);
      camera.update(0);
    }
  });

  axes.connect(["x", "y"], panInput);
});
