import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <form
        name="contact-me"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact-me" />
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" />
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input type="reset" value="Clear" />
          </li>
        </ul>
      </form>
    )
  }
}

export default Contact

// import React from 'react'
// import { navigate } from 'gatsby-link'
// // import Layout from 'Layout'

// function encode(data) {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//     .join('&')
// }

// class Contact extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { isValidated: false }
//   }

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   handleSubmit = e => {
//     e.preventDefault()
//     const form = e.target
//     fetch('/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: encode({
//         'form-name': form.getAttribute('name'),
//         ...this.state,
//       }),
//     })
//       .then(() => navigate(form.getAttribute('action')))
//       .catch(error => alert(error))
//   }

//   render() {
//     return (
//       // <Layout>
//         <section className="section">
//           <div className="container">
//             <div className="content">
//               <h1>Contact</h1>
//               <form
//                 name="contact"
//                 method="post"
//                 action="/contact/thanks/"
//                 data-netlify="true"
//                 data-netlify-honeypot="bot-field"
//                 onSubmit={this.handleSubmit}
//               >
//                 {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
//                 <input type="hidden" name="form-name" value="contact" />
//                 <div hidden>
//                   <label>
//                     Don’t fill this out:{' '}
//                     <input name="bot-field" onChange={this.handleChange} />
//                   </label>
//                 </div>
//                 <div className="field">
//                   <label className="label" htmlFor={'name'}>
//                     Your name
//                   </label>
//                   <div className="control">
//                     <input
//                       className="input"
//                       type={'text'}
//                       name={'name'}
//                       onChange={this.handleChange}
//                       id={'name'}
//                       required={true}
//                     />
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label className="label" htmlFor={'email'}>
//                     Email
//                   </label>
//                   <div className="control">
//                     <input
//                       className="input"
//                       type={'email'}
//                       name={'email'}
//                       onChange={this.handleChange}
//                       id={'email'}
//                       required={true}
//                     />
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label className="label" htmlFor={'message'}>
//                     Message
//                   </label>
//                   <div className="control">
//                     <textarea
//                       className="textarea"
//                       name={'message'}
//                       onChange={this.handleChange}
//                       id={'message'}
//                       required={true}
//                     />
//                   </div>
//                 </div>
//                 <div className="field">
//                   <button className="button is-link" type="submit">
//                     Send
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </section>
//       // </Layout>
//     )
//   }
// }

// export default Contact