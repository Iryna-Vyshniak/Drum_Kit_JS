# Parcel template

This project was created with Parcel. For familiarization and setting additional
features [refer to documentation](https://parceljs.org/).

---

## Drum Kit

This is a sound kit project made by me to demonstrate and practice my js skills.
**The goal for this project is to build a drum kit app that runs in the
browser.** The main concepts are key events and CSS animations. Key events begin
with using the `<kbd>` HTML tag. Within each tag, the data-key attribute is
created and its value is set to the key code value for each key. For example,
the `letter ‘U’` on the keyboard has a `key code of ‘85’`, the `‘K’` on the
keyboard has a `key code of ‘75’`, and so on. To make the pressed key play its
assigned sound, it’s bound to the `<audio>` tag with the data-key value.

**In this project we have a clear context for what the JavaScript needs to do,
which is:**

- Listen for a keydown event to play a drum sound
- Animate the keys on the screen when they are played

When a drum key is pressed, the event listener listens for the CSS transition
property to end. With the event listener implemented, each drum key displays the
transition, plays a drum sound and returns to its original state automatically.

<div align="center">
  <img src="https://ik.imagekit.io/irinavn2011/4.png?updatedAt=1684583128248" width="1200" height="auto"/>
</div>
