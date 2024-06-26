import React from "react";
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://x.com/EdderraguiAnas" className="home__social-icon" target="_blank">
                <FiTwitter />
            </a>
            <a href="https://github.com/edderraguiAnass" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/edderragui-anas-b58828257/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;