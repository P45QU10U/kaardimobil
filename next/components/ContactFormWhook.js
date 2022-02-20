import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import { JoshButton } from './designSystem/Buttons';

const whichFormSpree = 'xbjqkgqv';

function ContactFormWhook({ address }) {

  
  const [message, setMessage] = useState(address
    ? `Bonjour, j'aimerais une intervention à l'adresse suivante : ${address}`
    : 'Bonjour,');
    
    const [state, handleSubmit] = useForm(whichFormSpree, {
      data: {
        _subject: 'Vous avez un message',
        pageTitle() {
          // This function will be evaluated at submission time
          return document.title;
        },
      },
      errors: [
        {
          field: 'email',
        message: 'Email requis, svp.',
        code: 'REQUIRED',
      },
      {
        field: 'message',
        message: 'Le message est requis.',
        code: 'REQUIRED',
      },
    ],
  });
  
  if (state.succeeded) {
    return (
      <p>
        Merci pour votre message. Homecano vous répondra au plus tard sous 48h.
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="grid">
      <label htmlFor="email" className="flex flex-col pb-4">
        Votre e-mail (requis)
        <input
          id="email"
          type="email"
          name="email"
          required
          className="bg-gray-200 mt-2 focus:ring-2 focus:ring-blue-400"
        />
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message" className="flex flex-col pb-4">
        Message (requis)
        <textarea
          id="message"
          name="message"
          className="bg-gray-200 mt-2 focus:ring-2 focus:ring-blue-400"
          value={
            message
          }
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <JoshButton type="submit" disabled={state.submitting}>
        Envoyer
      </JoshButton>
    </form>
  );
}
export default ContactFormWhook;
