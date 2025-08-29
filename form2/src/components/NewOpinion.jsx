import { useActionState } from "react";


export function NewOpinion() {

  
function shareOpinionAction(prevActionState, formData){
  const opinionData = Object.fromEntries(formData.entries());


  // Send to backend

  fetch('http://localhost:3000/opinions', {
    method: 'POST',
    body: JSON.stringify({opinionData}),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json()).then((data) => console.log(data))
  
}

  const [formState, formAction] = useActionState(shareOpinionAction)

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" required/>
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required/>
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} required></textarea>
        </p>

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
