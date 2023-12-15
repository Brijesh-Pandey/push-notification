console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Genjutsu by Brijesh!",
    icon: "https://ik.imagekit.io/aboutUs/mangekyo_CpdLtj2sb.png?updatedAt=1702614700339"
  });
});
