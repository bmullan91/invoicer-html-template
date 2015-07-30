var hogan = require('hogan');
var path = require('path');
var fs = require('fs');

var html = getTemplate('index');

var partials = {
  companyDetails: getTemplate('companyDetails'),
  service: getTemplate('service'),
  invoice: getTemplate('invoiceDetails')
};

var template = hogan.compile(html);
var styles = fs.readFileSync(path.join(__dirname, 'styles.css'), { encoding: 'utf8' });

function dateString(date) {
  return (new Date(date)).toDateString();
}

function getTemplate(name) {
  return fs.readFileSync(path.join(__dirname, 'templates', name + '.html'), { encoding: 'utf8' });
}

module.exports = {
  format: 'html',
  render: function(data) {
  //styles are splat into a <style> tag
  data.styles = styles;
  //map data
  data.invoice.date = dateString(data.invoice.date);
  data.invoice.dueDate = dateString(data.invoice.dueDate);

  data.services.forEach(function(service) {
    service.worked.forEach(function(work) {
      //transform date
      work.date = dateString(work.date);
    });
  });

  return template.render(data, partials);
}};