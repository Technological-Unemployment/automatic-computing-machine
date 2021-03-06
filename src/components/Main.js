import PropTypes from 'prop-types';
import React from 'react';
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';
import * as FilePond from 'filepond';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Welcome to Doorway.ai!  Our aim is to help organizations and 
            employees adapt to the ever changing technological changes of   
            work.  The usage of technology is growing by the day and it's 
            important for you to front-run the competition. We invite you 
            to join us on this journey to help you gain or maintain a 
            competitive edge!
          </p>
          <p>
            Doorway was founded by Joseph Jones who has a breadth of experience
            in a variety of industries and noticed too few companies and 
            individuals are not integrating technological change into their
            business planning and work processes.  Naturally, this makes it 
            difficult to work efficiently and with the scaling of technology to 
            augment daily work, it puts you further behind.  The latter words 
            aren't empty scare-tactics, it's reality. 
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>                   
          <p>
            Factoring technological change, Doorway helps organizations
            develop human resource and operational strategies that
            align data, operations management and financial 
            planning to make complex problems simpler.
            
            Doorway helps organizations in:
            -- Human Resource Restructuring with the emphasis of retraining 
               employees in new skills.  Chances are, your employees have 
               a lot more experience than you realize.
            -- Utilzing technology to make you competitive against larger,
               more financially prosperious firms.

            In due time, Doorway will offer services to individuals but now is 
            focusing on organizations. 
            
            Join Doorway as we embark on helping you manage the world of
            technological change in a collective manner!
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Doorway.ai is focused on developing processes to help businesses manage
            technological change. Technological change is an increase in the efficiency
            of a product or process that results in an increase in output, without
            an increase in input. Doorway.ai beleives that when you engage your 
            employees in this process, it'll improve organizational sustainabilty.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
          
        >
          <h2 className="major">Contact</h2>
          <form method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />  
            <input type="hidden" name="form-name" value="contact" /> 
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
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/economichedge"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://doorway.ai" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
