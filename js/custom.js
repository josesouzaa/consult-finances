function initFaq() {

  const questions = document.querySelectorAll('[data-question]')
  const answers = document.querySelectorAll('[data-answer]')

  const faq = {
    clearAllActives() {
      questions.forEach((question) => { question.classList.remove('ativo') })
      answers.forEach((answer) => { answer.classList.remove('ativo') })
    },
    nextElement(event) {
      return event.target.nextElementSibling
    },
    addActives(question, answer) {
      question.classList.add('ativo')
      answer.classList.add('ativo')
    },
    onFaq(event) {
      if (event.target.classList.contains('ativo')) {
        faq.clearAllActives()
      } else {
        faq.clearAllActives()
        faq.addActives(event.target, faq.nextElement(event))
      }
    },
  }

  questions.forEach((question) => { question.addEventListener('click', faq.onFaq) })
}

initFaq()

function initTabNav() {

  const tabBtn = document.querySelectorAll('[data-btn]')
  const tabContent = document.querySelectorAll('[data-content-c]')

  const tabNav = {
    clearAllActives() {
      tabBtn.forEach((btn) => { btn.classList.remove('ativo') })
      tabContent.forEach((content) => { content.classList.remove('ativo') })
    },
    getDataBtn(event) {
      return event.target.dataset.btn
    },
    getDataContent(dataBtn) {
      return document.querySelector(`[data-content-c="${dataBtn}"]`)
    },
    addActives(btn, content) {
      btn.classList.add('ativo')
      content.classList.add('ativo')
    },
    onTabNav(event) {
      if (event.target.classList.contains('ativo')) {
        tabNav.clearAllActives()
      } else {
        tabNav.clearAllActives()
        tabNav.addActives(event.target, tabNav.getDataContent(tabNav.getDataBtn(event)))
      }
    },
  }

  tabBtn.forEach((btn) => { btn.addEventListener('click', tabNav.onTabNav) })
}

initTabNav()

function initFaq2() {

  const questions = document.querySelectorAll('[data-question-c]')
  const answers = document.querySelectorAll('[data-answer-c]')

  const faq = {
    clearAllActives() {
      questions.forEach((question) => { question.classList.remove('ativo') })
      answers.forEach((answer) => { answer.classList.remove('ativo') })
    },
    nextElement(event) {
      return event.target.nextElementSibling
    },
    addActives(question, answer) {
      question.classList.add('ativo')
      answer.classList.add('ativo')
    },
    onFaq(event) {
      if (event.target.classList.contains('ativo')) {
        faq.clearAllActives()
      } else {
        faq.clearAllActives()
        faq.addActives(event.target, faq.nextElement(event))
      }
    },
  }

  questions.forEach((question) => { question.addEventListener('click', faq.onFaq) })
}

initFaq2()