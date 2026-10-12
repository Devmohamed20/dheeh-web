/**
 * DHEEH Health & Wellness - FAQs Interactive Component
 */

(function initFaqPage() {
  document.addEventListener('DOMContentLoaded', () => {
    const items = Array.from(document.querySelectorAll('.faq-item'));
    const searchInput = document.getElementById('faqSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const filterButtons = Array.from(document.querySelectorAll('.filter-chip'));
    const noResults = document.getElementById('noResultsState');
    const resetSearchBtn = document.getElementById('resetSearchBtn');

    if (!items.length) return;

    let currentFilter = 'all';

    function toggleAccordion(item) {
      const isExpanded = item.getAttribute('data-open') === 'true';

      // Close all other items for a focused, clean layout
      items.forEach(otherItem => {
        if (otherItem !== item && otherItem.getAttribute('data-open') === 'true') {
          closeAccordion(otherItem);
        }
      });

      if (isExpanded) {
        closeAccordion(item);
      } else {
        openAccordion(item);
      }
    }

    function openAccordion(item) {
      const trigger = item.querySelector('.accordion-trigger');
      const content = item.querySelector('.accordion-content');
      const icon = item.querySelector('.material-symbols-outlined');
      const iconWrap = item.querySelector('.accordion-icon-wrap');

      item.setAttribute('data-open', 'true');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
      item.classList.add('shadow-[0_12px_36px_-6px_rgba(181,145,84,0.18)]');

      if (icon) {
        icon.textContent = 'remove';
        icon.classList.add('text-secondary');
        icon.classList.remove('text-primary');
      }
      if (iconWrap) {
        iconWrap.classList.add('bg-secondary-container/40');
      }

      if (content) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    }

    function closeAccordion(item) {
      const trigger = item.querySelector('.accordion-trigger');
      const content = item.querySelector('.accordion-content');
      const icon = item.querySelector('.material-symbols-outlined');
      const iconWrap = item.querySelector('.accordion-icon-wrap');

      item.setAttribute('data-open', 'false');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
      item.classList.remove('shadow-[0_12px_36px_-6px_rgba(181,145,84,0.18)]');

      if (icon) {
        icon.textContent = 'add';
        icon.classList.remove('text-secondary');
        icon.classList.add('text-primary');
      }
      if (iconWrap) {
        iconWrap.classList.remove('bg-secondary-container/40');
      }

      if (content) {
        content.style.maxHeight = '0px';
      }
    }

    // Attach click events
    items.forEach(item => {
      const trigger = item.querySelector('.accordion-trigger');
      if (trigger) {
        trigger.addEventListener('click', () => toggleAccordion(item));
      }
    });

    // Filter and Search logic
    function filterItems() {
      const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
      let visibleCount = 0;

      items.forEach(item => {
        const categories = (item.getAttribute('data-categories') || '').toLowerCase();
        const titleEl = item.querySelector('h2');
        const descEl = item.querySelector('.accordion-content p');
        const title = titleEl ? titleEl.textContent.toLowerCase() : '';
        const desc = descEl ? descEl.textContent.toLowerCase() : '';

        const matchesCategory = (currentFilter === 'all') || categories.includes(currentFilter);
        const matchesQuery = query === '' || title.includes(query) || desc.includes(query);

        if (matchesCategory && matchesQuery) {
          item.classList.remove('hidden');
          visibleCount++;
        } else {
          item.classList.add('hidden');
          closeAccordion(item);
        }
      });

      if (noResults) {
        if (visibleCount === 0) {
          noResults.classList.remove('hidden');
          noResults.classList.add('flex');
        } else {
          noResults.classList.add('hidden');
          noResults.classList.remove('flex');
        }
      }
    }

    // Chip click handlers
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.classList.remove('bg-primary', 'text-on-primary', 'active-filter');
          b.classList.add('bg-surface-container', 'text-on-surface-variant');
        });
        btn.classList.add('bg-primary', 'text-on-primary', 'active-filter');
        btn.classList.remove('bg-surface-container', 'text-on-surface-variant');

        currentFilter = btn.getAttribute('data-category') || 'all';
        filterItems();
      });
    });

    // Search events
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        if (clearSearchBtn) {
          if (searchInput.value.length > 0) {
            clearSearchBtn.classList.remove('hidden');
          } else {
            clearSearchBtn.classList.add('hidden');
          }
        }
        filterItems();
      });
    }

    if (clearSearchBtn && searchInput) {
      clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearSearchBtn.classList.add('hidden');
        filterItems();
      });
    }

    if (resetSearchBtn && searchInput) {
      resetSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
        currentFilter = 'all';
        filterButtons.forEach(b => {
          if (b.getAttribute('data-category') === 'all') {
            b.classList.add('bg-primary', 'text-on-primary', 'active-filter');
            b.classList.remove('bg-surface-container', 'text-on-surface-variant');
          } else {
            b.classList.remove('bg-primary', 'text-on-primary', 'active-filter');
            b.classList.add('bg-surface-container', 'text-on-surface-variant');
          }
        });
        filterItems();
      });
    }

    // Auto-open first item on load
    if (items.length > 0) {
      setTimeout(() => {
        openAccordion(items[0]);
      }, 150);
    }
  });
})();
