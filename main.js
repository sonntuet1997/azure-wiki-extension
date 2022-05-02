var enableFilter = true;


function whenElementAppear() {
  if ($(".we-ta-container textarea:visible").length > 0) {
    var content = $(".we-ta-container textarea").val();
    $(".wiki-editor .we-text-preview-container").css("display", "none");
    $(".wiki-editor").append("<br/>");
    $(".wiki-editor").append("<div id='new-editor'></div>");
    var editor = new FroalaEditor('#new-editor', {
      events: {
        contentChanged: function () {
          $(".we-ta-container textarea").val(this.html.get());
          $(".we-ta-container textarea")[0].dispatchEvent(new Event('input', {bubbles: true}));
        }
      }
    }, () => {
      editor.html.set(content);
    });
  }
  console.log(2);

  if ($(".html-editor-container:first .html-editor:visible").length > 0) {
    console.log(1);
    if ($('#des-editor').length > 0) return;
    let des = $(".html-editor-container .html-editor");
    // if (!des) return;
    var desContent = $(".html-editor-container:first .rooster-editor")[0].innerHTML;
    des.css("display", "none");
    // $(".wiki-editor").append("<br/>");
    $(".tfs-collapsible-content:first").append("<div id='des-editor'></div>");
    let desEditor = new FroalaEditor('#des-editor', {
      events: {
        contentChanged: function () {
          $(".html-editor-container:first .rooster-editor")[0].innerHTML = this.html.get();
          $(".html-editor-container:first .rooster-editor")[0].dispatchEvent(new Event('input', {bubbles: true}));
        }
      }
    }, () => {
      desEditor.html.set(desContent);
    });
  }
  setTimeout(whenElementAppear, 1000);
}

$(document).ready(function () {
  whenElementAppear();
});

