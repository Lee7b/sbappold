import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./style.css";

class Layout extends React.Component { 
    render () {
        return (
          // outerdiv is used to stick the footer to the bottom of the page regardless of content length
          <div className='outerdiv'>
            <main>
              <div>
               <Header />
                {this.props.children}
              </div>
            </main>
               <Footer />
          </div>
        )
    }
}

export default Layout;