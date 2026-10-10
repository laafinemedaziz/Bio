export function Footer (props){
    return(
        <div>
            <footer className="footer" style={{
                backgroundColor : props.darkMode ? "#363636" : "#E4E0E1"
            }}><small>© 2024 Lune development. All rights reserved.</small></footer>
        </div>
    )
}