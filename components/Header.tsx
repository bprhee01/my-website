import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
export default function Header() {
    return(
        <>
        <h1> Ben Rhee </h1>
        <div>
            <button ref="https://www.linkedin.com/in/thebenrhee/">

            <LinkedInIcon />
            </button>
            <GitHubIcon/>
            <LightModeIcon/>
        </div>
        </>
    )
}