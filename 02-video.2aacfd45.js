const e={form:document.querySelector(".feedback-form"),email:document.querySelector("input"),message:document.querySelector("textarea")},t={},a=localStorage.getItem("feedback-form-state");e.form.addEventListener("input",throttle((function(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),e.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),a&&(e.email.value=JSON.parse(a).email,e.message.value=JSON.parse(a).message);
//# sourceMappingURL=02-video.2aacfd45.js.map