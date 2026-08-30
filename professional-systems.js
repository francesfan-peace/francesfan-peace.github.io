(function () {
  const page = location.pathname.split('/').pop();
  const systems = {
    'system-hard-wearing-acrylic-flooring.html': {
      layer: 'images/professional-systems/layer-hard-acrylic.png',
      alt: 'Exploded layer diagram of a hard-wearing acrylic flooring system',
      layers: ['Clear sealer', 'Acrylic color coat', 'Acrylic primer', 'Concrete substrate'],
      gallery: [
        ['images/professional-systems/hard-acrylic-factory.jpg', 'Light-duty acrylic floor in a factory utility area', 'Light-duty industrial floor'],
        ['images/professional-systems/hard-acrylic-patio.png', 'Finished light gray acrylic patio floor', 'Clean acrylic finish'],
        ['images/system-acrylic.jpg', 'Acrylic coating used in a sports and utility setting', 'Application range']
      ],
      docs: [
        ['Technical Data Sheet', 'downloads/professional-systems/acrylic-floor-coating-tds.pdf'],
        ['Safety Data Sheet', 'downloads/professional-systems/acrylic-floor-coating-sds.pdf'],
        ['Acrylic Project Lookbook', 'downloads/professional-systems/acrylic-project-lookbook.pdf']
      ]
    },
    'system-cushioned-acrylic-sports-flooring.html': {
      layer: 'images/professional-systems/layer-cushioned-acrylic.png',
      alt: 'Exploded layer diagram of a cushioned acrylic sports court system',
      layers: ['Textured color and lines', 'Acrylic cushion coats', 'Resurfacer / primer', 'Prepared substrate'],
      docs: [['Acrylic Project Lookbook', 'downloads/professional-systems/acrylic-project-lookbook.pdf']]
    },
    'system-epoxy-thin-coat-flooring.html': {
      layer: 'images/professional-systems/layer-epoxy-thin.png',
      alt: 'Exploded layer diagram of an epoxy thin-coat flooring system',
      layers: ['Optional clear topcoat', 'Epoxy finish', 'Epoxy intermediate', 'Primer and concrete'],
      gallery: [
        ['images/professional-systems/epoxy-thin-white.jpg', 'White epoxy thin-coat floor in a bright industrial space', 'Finished epoxy surface'],
        ['images/cases/germany-automotive-epoxy-floor-2.jpg', 'Industrial epoxy traffic zoning', 'Traffic zoning'],
        ['images/cases/germany-automotive-epoxy-floor-3.jpg', 'Epoxy floor in an operating production space', 'Factory use']
      ],
      docs: [
        ['Technical Data Sheet', 'downloads/professional-systems/epoxy-thin-coat-tds.pdf'],
        ['Safety Data Sheet', 'downloads/professional-systems/epoxy-thin-coat-sds.pdf'],
        ['Epoxy Application Guide', 'downloads/professional-systems/epoxy-application-guide.pdf']
      ]
    },
    'system-epoxy-self-leveling-flooring.html': {
      layer: 'images/professional-systems/layer-epoxy-self-leveling.png',
      alt: 'Exploded layer diagram of an epoxy self-leveling flooring system',
      layers: ['Protective top layer', 'Self-leveling epoxy body', 'Epoxy intermediate', 'Primer and concrete'],
      docs: [['Epoxy Application Guide', 'downloads/professional-systems/epoxy-application-guide.pdf']]
    },
    'system-epoxy-color-sand-self-leveling-flooring.html': {
      layer: 'images/professional-systems/layer-epoxy-color-sand.png',
      alt: 'Exploded layer diagram of a color-sand self-leveling epoxy system',
      layers: ['Clear protective topcoat', 'Color-sand epoxy body', 'Epoxy intermediate', 'Primer and concrete'],
      gallery: [
        ['images/professional-systems/epoxy-color-sand-room.png', 'Decorative color-sand epoxy floor in a residential interior', 'Decorative seamless finish'],
        ['images/professional-systems/epoxy-color-sand-kitchen.png', 'Light color-sand epoxy floor in a kitchen', 'Fine aggregate character'],
        ['images/cases/canada-epoxy-flake-garage-2.jpg', 'Close view of a decorative resin floor texture', 'Surface detail']
      ],
      docs: [
        ['Technical Data Sheet', 'downloads/professional-systems/epoxy-color-sand-tds.pdf'],
        ['Safety Data Sheet', 'downloads/professional-systems/epoxy-color-sand-sds.pdf'],
        ['Project Lookbook', 'downloads/professional-systems/epoxy-color-sand-lookbook.pdf'],
        ['Epoxy Application Guide', 'downloads/professional-systems/epoxy-application-guide.pdf']
      ]
    },
    'system-metallic-epoxy-flooring.html': {
      layer: 'images/professional-systems/layer-metallic-epoxy.png',
      alt: 'Exploded layer diagram of a metallic epoxy flooring system',
      layers: ['Clear protective topcoat', 'Metallic effect epoxy', 'Dark base coat', 'Primer and concrete'],
      gallery: [
        ['images/professional-systems/metallic-epoxy-gallery.png', 'Completed metallic epoxy floor in a gallery', 'Completed interior'],
        ['images/professional-systems/metallic-epoxy-closeup.png', 'Close-up of black gray and gold metallic epoxy', 'Pearlescent detail'],
        ['images/professional-systems/layer-metallic-epoxy.png', 'Technical layer view of metallic epoxy flooring', 'System build-up']
      ]
    },
    'system-epoxy-flake-flooring.html': {
      layer: 'images/professional-systems/layer-epoxy-flake.png',
      alt: 'Exploded layer diagram of an epoxy flake flooring system',
      layers: ['Clear protective topcoat', 'Broadcast decorative flakes', 'Pigmented epoxy base', 'Primer and concrete'],
      gallery: [
        ['images/cases/canada-epoxy-flake-garage-1.jpg', 'Completed epoxy flake commercial floor', 'Completed floor'],
        ['images/professional-systems/epoxy-flake-blends.jpg', 'Decorative epoxy flake blend samples', 'Flake blend options'],
        ['images/cases/canada-epoxy-flake-garage-3.jpg', 'Seamless epoxy flake floor field', 'Seamless floor field']
      ],
      docs: [['Epoxy Application Guide', 'downloads/professional-systems/epoxy-application-guide.pdf']]
    },
    'system-ultra-wear-resistant-polyurethane-flooring.html': {
      layer: 'images/professional-systems/layer-pu-ultra-wear.png',
      alt: 'Exploded layer diagram of an ultra-wear-resistant polyurethane floor',
      layers: ['PU wear topcoat', 'Colored epoxy finish', 'Epoxy body coat', 'Primer and concrete']
    },
    'system-polyurethane-thin-coat-flooring.html': {
      layer: 'images/professional-systems/layer-pu-thin.png',
      alt: 'Exploded layer diagram of a polyurethane thin-coat floor',
      layers: ['Polyurethane finish', 'Epoxy intermediate', 'Epoxy primer', 'Concrete substrate']
    },
    'system-cementitious-urethane-mortar-flooring.html': {
      layer: 'images/professional-systems/layer-cementitious-urethane.png',
      alt: 'Exploded layer diagram of a cementitious urethane mortar floor',
      layers: ['Optional seal coat', 'PU-cement mortar body', 'Bonded scratch coat', 'Concrete substrate']
    },
    'system-standard-roof-waterproofing.html': {
      layer: 'images/professional-systems/layer-waterproof-gray.png',
      alt: 'Exploded layer diagram of a reinforced gray roof waterproofing system',
      layers: ['Final waterproof membrane', 'Polyester crack reinforcement', 'First waterproof coat', 'Concrete roof slab'],
      gallery: [
        ['images/professional-systems/waterproof-gray-application.png', 'Gray waterproof coating being poured over a roof defect', 'Detail application'],
        ['images/professional-systems/waterproof-white-roof.jpg', 'Completed liquid-applied roof membrane', 'Completed roof field'],
        ['images/professional-systems/layer-waterproof-gray.png', 'Technical build-up of reinforced roof waterproofing', 'Reinforced build-up']
      ],
      docs: [
        ['Technical Data Sheet', 'downloads/professional-systems/waterproof-coating-tds.pdf'],
        ['Safety Data Sheet', 'downloads/professional-systems/waterproof-coating-sds.pdf'],
        ['Application Guide', 'downloads/professional-systems/waterproof-application-guide.pdf']
      ]
    },
    'system-reflective-waterproofing-insulation.html': {
      layer: 'images/professional-systems/layer-waterproof-reflective.png',
      alt: 'Exploded layer diagram of a reflective waterproof roof system',
      layers: ['Solar-reflective white finish', 'Waterproof membrane', 'Localized reinforcement', 'Concrete roof slab'],
      gallery: [
        ['images/professional-systems/reflective-roof.jpg', 'Completed white reflective waterproof roof', 'Reflective roof finish'],
        ['images/professional-systems/waterproof-white-roof.jpg', 'White liquid waterproofing across a roof field', 'Continuous membrane'],
        ['images/professional-systems/layer-waterproof-reflective.png', 'Technical build-up of reflective waterproofing', 'Reflective build-up']
      ],
      docs: [
        ['Technical Data Sheet', 'downloads/professional-systems/waterproof-coating-tds.pdf'],
        ['Safety Data Sheet', 'downloads/professional-systems/waterproof-coating-sds.pdf'],
        ['Application Guide', 'downloads/professional-systems/waterproof-application-guide.pdf']
      ]
    }
  };

  const config = systems[page];
  if (!config) return;

  document.querySelectorAll('.detail-actions .button.outline').forEach((button) => button.remove());

  const media = document.querySelector('.detail-media');
  if (media) {
    media.innerHTML = '<img src="' + config.layer + '" alt="' + config.alt + '">' +
      '<div class="layer-key">' + config.layers.map((layer, index) =>
        '<span><b>' + String(index + 1).padStart(2, '0') + '</b>' + layer + '</span>'
      ).join('') + '</div>';
  }

  if (config.gallery) {
    document.querySelectorAll('.gallery-card').forEach((card, index) => {
      const item = config.gallery[index];
      if (!item) return;
      const image = card.querySelector('img');
      const caption = card.querySelector('figcaption');
      image.src = item[0];
      image.alt = item[1];
      caption.textContent = item[2];
    });
  }

  const docGrid = document.querySelector('.doc-grid');
  if (docGrid) {
    const docs = config.docs || [];
    const available = docs.map((doc) =>
      '<a class="doc doc-ready" href="' + doc[1] + '" target="_blank" rel="noopener">' +
      '<small>PDF</small><strong>' + doc[0] + '</strong><span>Open PDF →</span></a>'
    );
    available.push(
      '<a class="doc doc-request" href="index.html#contact"><small>ON REQUEST</small>' +
      '<strong>Project-Specific Specification</strong><span>Request controlled file →</span></a>'
    );
    docGrid.innerHTML = available.join('');
  }

  const docHeading = document.querySelector('.documents-head h2');
  if (docHeading) docHeading.textContent = 'Technical resources';
})();
