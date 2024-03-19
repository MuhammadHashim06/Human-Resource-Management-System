import './Home.css'
function Home() {
    return (
        <div className="menu">
            <h1>Home</h1>
            <div className="content">
                <div className="announcement">
                    <h2>Announcement</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mauris vel tortor convallis
                        tincidunt. Aliquam nec congue enim. Donec rutrum tellus eget diam consequat, sit amet
                        scelerisque justo cursus.</p>
                </div>
                <div className="chart-container">
                    <canvas id="attendanceChart"></canvas>
                </div>
                <div className="chart-container">
                    <canvas id="assignmentChart"></canvas>
                </div>
            </div>
        </div>
    );
}

export default Home;
