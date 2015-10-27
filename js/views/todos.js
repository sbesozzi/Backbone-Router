// Create constructor for collection
function proccessData(data) {
  return data.map(function(item) {
    return `
    <li>${item.title}</li>
  `;
  }).join('');
}

function todosTemplate(data) {
  return `
    <h2>Something Todo</h2>
   <ul>${proccessData(data)}</ul>
  `;
}

export default todosTemplate