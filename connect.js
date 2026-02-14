async function fetchMatches() {
    const response = await fetch('http://localhost:3000/api/matches?interests=AI');
    const mentors = await response.json();
    
    // Now use the 'mentors' variable to build your HTML cards as shown above.
}