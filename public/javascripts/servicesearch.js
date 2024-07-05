// search.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchInput').addEventListener('input', function() {
      var searchValue = this.value.trim().toLowerCase();
      console.log(searchValue);
      var providers = document.querySelectorAll('.service-provider');
      console.log(providers);
  
      providers.forEach(function(provider) {
        console.log(provider);
        var serviceName = provider.querySelector('.card-title').textContent.toLowerCase();
        console.log(serviceName);
        if (serviceName.includes(searchValue)) {
          provider.style.display = 'block';
        } else {
          provider.style.display = 'none';
        }
      });
    });
  });
  