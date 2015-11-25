<script>
document.getElementById('lead-form').addEventListener(
  'submit', function(event) {
  ga(function(tracker) {
    clientId = tracker.get('clientId');
    document.getElementById('clientId').value = clientId;
    tracker.send('event', 'online form', 'submit', {
      'dimension6': clientId
  });
  }); });
</script>