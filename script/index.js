const myDocs = {
  title: '',
  body: '',
  footer: '',
  data: '',
  application: {
    title: { description: '' },
    body: { description: '' },
    footer: { description: '' },
    data: { description: '' },
  },

  show: function () {
    for (key in myDocs) {
      if (typeof myDocs[key] == 'string') {
        myDocs[key] = prompt(`Please, fill in documents ${key}`, '');
        document.write(`Document ${key} = ${myDocs[key]} <br/>`);
      } else if (typeof myDocs[key] == 'object') {
        for (key in myDocs.application) {
          for (keyIn in myDocs.application[key]) {
            myDocs.application[key][keyIn] = prompt(
              `Please, fill in the ${key} of the application description`,
              '',
            );
            document.write(`Document application ${key} = ${myDocs.application[key][keyIn]} <br/>`);
          }
        }
      }
    }
  },
};

myDocs.show();
