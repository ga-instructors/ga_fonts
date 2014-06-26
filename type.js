var http = require('http');
var fs   = require('fs');


var types = {
  "PFDinTextCompProBold":
  [
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/pfdintextcomppro-bold-webfont.eot",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/pfdintextcomppro-bold-webfont.eot?#iefix",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/pfdintextcomppro-bold-webfont.woff",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/pfdintextcomppro-bold-webfont.ttf",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/pfdintextcomppro-bold-webfont.svg#PFDinTextCompProBold"
  ],
  "PFDinTextCompProMedium":
  [
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/pfdintextcomppro-medium-webfont.eot",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/pfdintextcomppro-medium-webfont.woff",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/pfdintextcomppro-medium-webfont.ttf",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/pfdintextcomppro-medium-webfont.svg#pf_din_text_comp_promedium"
  ],
  "PFDinTextCompProLight":
  [
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/pfdintextcomppro-light-webfont.eot",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/pfdintextcomppro-light-webfont.woff",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/pfdintextcomppro-light-webfont.ttf",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/pfdintextcomppro-light-webfont.svg#PFDinTextCompProLight"
  ],
  "News706BT-RomanC":
  [
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/232ED5_0_0.eot",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/232ED5_0_0.woff",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/232ED5_0_0.ttf",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/232ED5_0_0.svg#wf"
  ],
  "News706BT-ItalicC":
  [
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/232ED5_1_0.eot",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/232ED5_1_0.woff",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/232ED5_1_0.ttf",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/232ED5_1_0.svg#wf"
  ],
  "News706BT-BoldC":
  [
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/232ED5_2_0.eot",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/232ED5_2_0.woff",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/232ED5_2_0.ttf",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/232ED5_2_0.svg#wf"
  ],
  "InconsolataMedium":
  [
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/inconsolata-webfont.eot",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/inconsolata-webfont.woff",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/inconsolata-webfont.ttf",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/inconsolata-webfont.svg#InconsolataMedium"
  ],
  "Iconic":
  [
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/iconic.eot",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/iconic.eot?#iefix",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/iconic.svg#iconic",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/iconic.woff",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/iconic.ttf"
  ],
  "Topics":
  [
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/topics.eot",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/topics.eot?#iefix",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/topics.woff",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/topics.ttf",
    "http://blog.generalassemb.ly/blog/wp-content/themes/twentytwelve-child/fonts/topics.svg#topics"
  ]
};

var format = new RegExp("(eot|woff|ttf|svg)");

for (type in types) {
  types[type].forEach(function(link){
    var file,
        fileName,
        request;

    fileName = type + "." + link.match(format)[0];
    file = fs.createWriteStream(fileName);
    console.log(fileName);

    request = http.get(link, function(response) {
      response.pipe(file);
    });
  });
};
