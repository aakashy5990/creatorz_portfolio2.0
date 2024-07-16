document.addEventListener('DOMContentLoaded', function() {
    const projCountElement = document.getElementById('projCount');
    const clientCountElement = document.getElementById('clientCount');
    const projLine = document.querySelector('.intro_pro_line');
    const clientLine = document.querySelector('.intro_client_line');
    
    // Set initial values
    let projCount = 0;
    let clientCount = 0;
    
    // Initial increment speed
    let initialIncrementSpeed = 30; // milliseconds (initial faster speed)
    let speedIncreaseRate = 0.6; // Rate to increase speed
    let minIncrementSpeed = 5; // Minimum speed limit
    
    // Function to increment counts and update lines
    function incrementCounts() {
        // Update projCount
        if (projCount < 235) {
            projCount += 1; // Increase by 1 each time
        }
        
        // Update clientCount
        if (clientCount < 112) {
            clientCount += 1; // Increase by 1 each time
        }
        
        // Update projCountElement text
        projCountElement.textContent = projCount;
        
        // Update clientCountElement text
        clientCountElement.textContent = clientCount;
        
        // Update line widths
        updateLineWidth(projLine, projCount, 235);
        updateLineWidth(clientLine, clientCount, 112);
        
        // Check if projCount reaches final value to add plus icon
        if (projCount >= 235) {
            projCountElement.innerHTML = '235 <span class="plus_icon">+</span>';
        }
        
        // Gradually increase speed
        if (initialIncrementSpeed > minIncrementSpeed) {
            initialIncrementSpeed *= speedIncreaseRate;
        }
        
        // Stop incrementing when both counts reach their final values
        if (projCount >= 235 && clientCount >= 112) {
            clearInterval(intervalId);
        }
    }
    
    // Function to update line width based on count
    function updateLineWidth(lineElement, count, maxCount) {
        const maxWidth = 150; // Maximum width for the line (adjusted to 150px)
        const incrementStep = maxWidth / maxCount;
        
        // Calculate the new width
        const newWidth = count * incrementStep;
        
        // Limit width to maxWidth
        const finalWidth = Math.min(newWidth, maxWidth);
        
        // Apply the new width to the line element
        lineElement.style.width = finalWidth + 'px';
    }
    
    // Call incrementCounts function initially
    incrementCounts();
    
    // Call incrementCounts function every initialIncrementSpeed milliseconds
    const intervalId = setInterval(incrementCounts, initialIncrementSpeed);
});
