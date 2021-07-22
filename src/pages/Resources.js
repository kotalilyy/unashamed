import React from "react";

var NewComponent = React.createClass({
  render: function () {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="../components/main.css" />
        <title>Unashamed</title>
        {/* begin nav bar with logo links and login option*/}
        <nav className="nav-wrapper indigo">
          <div className="container">
            <a href="#" className="brand-logo">
              <img src="./images/handshake.png" width="41px" height="41px" />
              Unashamed
            </a>
            <a href="#" className="sidenav-trigger" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./resources.html">Resources</a>
              </li>
              <li>
                <a href="./login.html">Login</a>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
        {/* end nav*/}

        {/* begin card with resources information*/}
        <div className="row">
          <div className="col s12 m5">
            <div className="card-panel deep-purple lighten-4">
              <span className="black-text">
              <section className="resources">
                <div>
                  <div>
                    <a href="http://www.mhresources.org/" target="">Mental Health Resources (MHR)</a> 
                    <p>This is a nonprofit that provides community-based mental health services to adults, especially those suffering medical, 
                        social or substance-related comorbidities.</p>
                  </div>
                  <div>
                    <a href="https://www.nami.org/Home" target="">National Alliance on Mental Illness (NAMI)</a>
                    <p>This is a mental health advocacy organization with state organizations, affiliates and volunteers. It is a hub for support groups, 
                        free education, raising awareness and building community.</p>
                  </div>
                  <div>
                    <a href="https://www.who.int/" target="">World Health Organization (WHO) - Project Atlas</a>
                    <p>This compiles resources and information about mental health and neurology policies, prevalence, statistics, medicines, professionals, 
                        information systems and publications. Topics covered include mental health in emergencies, maternal and child mental health, 
                        neurology and public health, disorders management and suicide prevention. Information can be searched by region, country or worldwide.</p>
                  </div>
                  <div>
                    <a href="https://www.hhs.gov/" target="">U.S. Department of Health & Human Services -- Mental Health</a>
                    <p>This is run by the U.S. Department of Health and Human Services and provides government information about mental health taken from 
                        the Centers for Disease Control, National Institutes of Health, National Institute of Mental Health, Medline Plus, FindYouthInfo.gov and 
                        Substance Abuse and Mental Health Services Administration. The information is for the general public health care providers, policy makers, 
                        schools and communities.</p>
                  </div>
                  <div>
                    <a href="http://www.freedomfromfear.org/" target="">Freedom from Fear</a>
                    <p>This is a nonprofit advocacy organization that contains research-based information and treatment referrals for anxiety and depression.</p>
                  </div>
                  <div>
                    <a href="https://www.autismspeaks.org/" target="">Autism Speaks</a> 
                    <p>This website is an autism research and advocacy organization that contains links to apps, tools kits and a resource guide for families and 
                        individuals with autism autism spectrum disorders.</p>
                  </div>
                  <div>
                    <a href="http://www.glbtnationalhelpcenter.org/" target="">LGBT National Help Center</a>
                    <p>The LGBT National Help Center provides an online peer-support chat as well as free, confidential counseling over the phone for the GLBT community.</p>
                  </div>
                  <div>
                    <a href="https://screening.mentalhealthscreening.org/Military_NDSD" target="">MindWise — Military and Family Screenings</a>
                    <p>Military Pathways is a site created by Screening for Mental Health and the Department of Defense that allows military members and 
                        their families to take free, anonymous mental health or alcohol self-assessments. Completion of the assessment directs users to 
                        referral information for Department of Defense and Veterans Affairs services.</p>
                  </div>
                  <div>
                    <a href="https://www.minorityhealth.hhs.gov/" target="">U.S. Department of Health & Human Services — Office of Minority Health</a>
                    <p>The U.S. Department of Health and Human Services Office of Minority Health website provides statistics, news and treatment information.</p>
                  </div>
                  <div>
                    <a href="https://www.nia.nih.gov/health" target="">National Institute on Aging — Health Information</a>
                    <p>The National Institutes of Health provides this online index of information, videos and training tools about senior health, 
                        including mental health and wellness.</p>
                  </div>
                  <div>
                    <a href="https://www.womenshealth.gov/mental-health/resources/" target="">Office on Women’s Health — Mental Health Resources </a>
                    <p>The Office on Women’s Health of the U.S. Department of Health and Human Services provides access to research, publications, 
                        Surgeon General Reports and general information for women’s mental health issues. This includes problems related to pregnancy and conception, 
                        menstruation, menopause, women veterans, suicide prevention and mental illnesses.</p>
                  </div>
                  <div>
                    <a href="http://www.jedfoundation.org/" target="">The Jed Foundation</a>
                    <p>The Jed Foundation is an organization committed to the mental and emotional health of college students and preventing suicide among this population. 
                        The foundation runs several free online self-assessment and resource programs for students and campuses. It offers training tools for 
                        campus professionals to improve their mental health services for students.</p>
                  </div>
                  <div>
                    <a href="https://youth.gov/youth-topics/youth-mental-health" target="">U.S. Government — Youth Mental Health</a>
                    <p>This is a hub of government information about youth mental health issues, including substance abuse, LGBT issues, bullying and homelessness.</p>
                  </div>
                  <div>
                    <a href="http://www.adaa.org/living-with-anxiety/ask-and-learn/resources" target="">Anxiety and Depression Association of America (ADAA) – Online Resources</a>
                    <p>The Anxiety and Depression Association of America raises public and professional awareness, promotes research advancement and 
                        provides referrals for children and adults with anxiety, depression, obsessive-compulsive disorder, post-traumatic stress disorders and 
                        related disorders. The website provides information about these conditions, their treatment and resources for professionals.</p>
                  </div>
                </div>
              </section>
              <section className="hotlines">
                <div>
                  <a href="https://www.safehorizon.org/" target="">Safe Horizon</a>
                  <p>For domestic violence victims, sexual assault victims and crime victims to receive 24/7 free crisis counseling and safety planning.</p>
                </div>
                <div>
                  <a href="https://suicidepreventionlifeline.org/" target="">National Suicide Prevention Lifeline</a>
                  <p>Call 1-800-273-TALK to receive confidential, toll-free, 24/7 suicide prevention counseling and local referrals. En español 1-888-628-9454</p>
                </div>
                <div>
                  <a href="https://teenhealthandwellness.com/" target="">Teen Health & Wellness</a>
                  <p>A list of hotlines for teens facing issues ranging from bullying and abuse to drugs and eating disorders.</p>
                </div>
                <div>
                  <a href="https://www.thehotline.org/" target="">National Domestic Violence Hotline</a>
                  <p>Call 1-800-799-SAFE for 24/7 counseling and support to victims of domestic violence and abuse.</p>
                </div>
                <div>
                  <a href="https://www.veteranscrisisline.net/" target="">Veterans Crisis Line</a>
                  <p>Call 1-800-273-8255 and press 1 or text to 838255 for confidential help for veterans and their families.</p>
                </div>
                <div>
                  <a href="https://www.crisistextline.org/" target="">Crisis Text Line</a>
                  <p>Text “HELLO” to 741741 Text HOME to 741741 to connect with a Crisis Counselor</p>
                </div>
                <div>
                  <a href="https://www.glbthotline.org/national-hotline.html" target="">LGBT National Hotline</a>
                  <p>1-888-843-4564</p>
                </div>
                <div>
                  <a href="https://www.nationaleatingdisorders.org/" target="">National Eating Disorders Association (NEDA) </a>
                  <p>Helpline 1-800-931-2237 </p>
                </div>
                <div>
                  <a href="https://www.samhsa.gov/find-help/disaster-distress-helpline" target="">SAMHSA Disaster Distress Helpline</a>
                  <p>1-800-985-5990 or Text "TalkWithUs" to 66746 </p>
                </div>
                <div>
                  <a href="https://www.childhelp.org/hotline/" target="">Childhelp National Child Abuse Hotline</a>
                  <p>1-800-4-A-Child or 1-800-422-4453 </p>
                </div>
              </section>
              </span>
            </div>
          </div>
        </div>
        {/* end card with resources information*/}
        {/* begin footer */}
        <footer className="page-footer indigo">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">
                  When it comes to your mental health
                </h5>
                <h5></h5>
                <h5>Never be afraid</h5>
                <h5>Remain Unashamed</h5>
                <p className="grey-text text-lighten-4" />
              </div>
              <div className="col l4 offset-l2 s12">
                <ul>
                  <li>
                    <a
                      className="grey-text text-lighten-3"
                      href="https://www.helpguide.org/"
                      target="_blank"
                    >
                      Help Guide
                    </a>
                  </li>
                  <li>
                    <a
                      className="grey-text text-lighten-3"
                      href="https://www.betterhelp.com/"
                      target="_blank"
                    >
                      Find Counseling
                    </a>
                  </li>
                  <li>
                    <a
                      className="grey-text text-lighten-3"
                      href="https://suicidepreventionlifeline.org/"
                      target="_blank"
                    >
                      Suicide Prevention Lifeline
                    </a>
                  </li>
                  <li>
                    <a
                      className="grey-text text-lighten-3"
                      href="https://www.cdc.gov/injury/features/stop-bullying/index.html"
                      target="_blank"
                    >
                      #StopBullying
                    </a>
                  </li>
                  <li>
                    <a
                      className="grey-text text-lighten-3"
                      href="https://www.stopvaw.org/"
                      target="_blank"
                    >
                      Stop Violence Against Women
                    </a>
                  </li>
                  <lil>
                    <a
                      className="grey-text text-lighten-3"
                      href="https://www.thehotline.org/"
                      target="_blank"
                    >
                      Domestic Abuse Support{" "}
                    </a>
                  </lil>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2021 Copyright
              <a className="grey-text text-lighten-4 right" href="#!" />
            </div>
          </div>
        </footer>
        {/*end footer */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
      </div>
    );
  },
});
 
export default Resources;