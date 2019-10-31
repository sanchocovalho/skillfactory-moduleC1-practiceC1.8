function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this;
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

// Метод html()
jQuery.prototype.html = function(html_text){
  if (html_text === undefined)
  {
    this.each(element => html_text = element.innerHTML);
    return html_text;
  }
  else
  {
    this.each(element => element.innerHTML = html_text);
    return this;
  }
}

// Метод text()
jQuery.prototype.text = function(text){
  if (text === undefined)
  {
    this.each(element => text = element.textContent);
    return text;
  }
  else
  {
    this.each(element => element.textContent = text);
    return this;
  }
}

const $ = (e) => new jQuery(e);

function init() {
  let msg = "Какое-то сообщение.";
  // Получение html-содержимого
  let html_text = $(".content-1").html();
  // Получение текстового содержимого
  let text = $(".title").text();
  // Установка html-содержимого
  $(".content-2").html(html_text);
  // Установка текстового содержимого
  $(".message").text(text + ". " + msg);
}
// Ждем загрузку содержимого DOM
document.addEventListener('DOMContentLoaded', init);