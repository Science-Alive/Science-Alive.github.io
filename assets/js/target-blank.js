// Function to check if a link is external (not the same domain)
function isExternal(link) {
  return link.hostname !== window.location.hostname;
}

document.addEventListener("DOMContentLoaded", function() {
  // Select all anchor tags on the page
  var links = document.querySelectorAll('a');

  links.forEach(function(link) {
    // Check if the link has an href and is not a local anchor (#id)
    if (link.href && link.href.indexOf('#') !== 0) {
      // Check if the link is external
      if (isExternal(link)) {
        link.setAttribute('target', '_blank');
        // Add security attributes to prevent tabnabbing/phishing
        link.setAttribute('rel', 'noopener noreferrer');
      }
      // Optional: Add target="_blank" to ALL links (Internal & External)
      /* 
      else {
        link.setAttribute('target', '_blank');
      }
      */
    }
  });
});
