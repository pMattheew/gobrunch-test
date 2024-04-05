const listItem = `<li>
<span><%= number %></span>
</li>`

document.addEventListener("DOMContentLoaded", () => {
  while (!ejs) {
    setTimeout(() => null, 500)
  }
  const inputElement = document.querySelector('input[type="number"]')
  const listElement = document.querySelector("ol")

  inputElement.addEventListener("input", event => {
    listElement.innerHTML = ""
    const quantity = event.target.value
    for (let i = 0; i < quantity; i++) {
      const rendered = ejs.render(listItem, { number: i + 1 })
      listElement.innerHTML += rendered
    }
  })
})
