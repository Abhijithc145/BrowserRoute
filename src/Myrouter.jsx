import React from 'react'

const Myrouter = (props) => {
    const{children}=props;
    

    const href = window.location.href;
    const obj = new URL(href);
    console.log(obj.pathname.substring(0),"ppppppppppppppppp")
    const paths = obj.pathname.substring(1);
  return (
    <div>
    <a href='home'>Home</a>
    <a href='usage'>Usage</a>
    <a href='settings'>Settings</a>
    <a href='chart'>Chart</a>
    {/* {children} */}
        
        {React.Children.toArray(children).find((child) => child.props.path === paths)}
    </div>
  )
}

export default Myrouter