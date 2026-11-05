import { projectMeta, secondary } from '../src/content/projects.mjs';
export function refinePage(document, content, page) {
  function populateSecondary(page) {
    const data=secondary[page];
    content.querySelectorAll('[data-field]').forEach(el=>{el.textContent=data[el.dataset.field];});
    const article=content.querySelector('[data-secondary-body]');
    data.sections.forEach((entry,index)=>{
      const section=document.createElement('section');
      const counter=document.createElement('p');counter.className='hs-section-counter';counter.textContent=String(index+1).padStart(2,'0');
      const heading=document.createElement('h2');heading.textContent=entry[0];section.append(counter,heading);
      entry.slice(1).forEach(text=>{const paragraph=document.createElement('p');paragraph.textContent=text;section.append(paragraph);});
      article.append(section);
    });
  }
  function setLinkLabel(element,label) {
    const icon=element.querySelector('i[data-lucide],svg');
    const text=document.createElement('span');text.textContent=label;
    element.replaceChildren(text);
    if(icon)element.append(icon);
  }
  function refineTypography() {
    content.querySelectorAll('.hs-method-line,.hs-detail-methods').forEach(line=>{
      const methods=line.textContent.split(' · ');
      line.replaceChildren();
      methods.forEach((method,index)=>{
        const item=document.createElement('span');item.className='hs-method-item';item.textContent=method;
        if(index){const separator=document.createElement('span');separator.className='hs-method-separator';separator.textContent='·';item.prepend(separator);line.append(document.createTextNode(' '));}
        line.append(item);
      });
    });
    content.querySelectorAll('p:not(.hs-method-line):not(.hs-detail-methods):not(.hs-eyebrow):not(.hs-section-counter)').forEach(paragraph=>{
      const walker=document.createTreeWalker(paragraph,4);
      let node,last;
      while(node=walker.nextNode())if(node.textContent.trim())last=node;
      if(!last)return;
      const ending=last.textContent.match(/(\S+)\s+(\S+)(\s*)$/);
      if(ending && ending[1].length+ending[2].length<35){
        last.textContent=last.textContent.slice(0,ending.index)+ending[1]+'\u00a0'+ending[2]+ending[3];
      }
    });
  }
  function alignProjectLabels(page) {
    const meta=projectMeta[page];
    if(meta){
      content.querySelector('.hs-detail-hero h1').textContent=meta.title;
      content.querySelector('.hs-detail-type').textContent=meta.type;
      content.querySelector('.hs-detail-facts>div:last-child>span').textContent='Materials';
    }
    content.querySelectorAll('.hs-research-list h3 a[data-page]').forEach(link=>{
      const item=projectMeta[link.dataset.page];
      setLinkLabel(link,item.title);
      link.querySelector('i[data-lucide],svg')?.remove();
      const row=link.closest('article');
      row.querySelector('.hs-list-meta>span').textContent=item.date;
      row.querySelector('.hs-method-line').textContent=item.methods;
      const readLink=document.createElement('a');readLink.href='#'+link.dataset.page;readLink.dataset.page=link.dataset.page;readLink.className='hs-text-link hs-project-link cursor-interaction';readLink.setAttribute('aria-label','Read project: '+item.title);readLink.textContent='Read project';
      const chevron=document.createElement('i');chevron.setAttribute('data-lucide','chevron-right');chevron.setAttribute('aria-hidden','true');readLink.append(chevron);
      const heading=link.closest('h3');
      const headingGroup=document.createElement('div');headingGroup.className='hs-project-heading';
      heading.before(headingGroup);headingGroup.append(heading,readLink);
    });
    content.querySelectorAll('.hs-experience[data-page]').forEach(link=>{
      setLinkLabel(link.querySelector('.hs-experience-title'),projectMeta[link.dataset.page].title);
    });
    content.querySelectorAll('.hs-trajectory-step .hs-text-link[data-page]').forEach(link=>{
      setLinkLabel(link,'Read project');
      link.setAttribute('aria-label','Read project: '+projectMeta[link.dataset.page].title);
    });
    content.querySelectorAll('.hs-next-project>a[data-page]').forEach(link=>{
      const next=projectMeta[link.dataset.page];
      setLinkLabel(link,next?next.title:'All research');
      link.previousElementSibling.textContent=next?'RELATED PROJECT':'EXPLORE OTHER PROJECTS';
    });
    content.querySelectorAll('[data-preview-file]').forEach(button=>{
      const key=button.dataset.previewFile.toLowerCase();
      if(key==='cv')return;
      const label=key.includes('hfmc')?'HFMC report':key.includes('ntu')?'NTU report':'Project brief';
      const icon=document.createElement('i');icon.setAttribute('data-lucide','file-text');icon.setAttribute('aria-hidden','true');
      const nestedLabel=button.querySelector('span');
      if(nestedLabel && nestedLabel.querySelector('small')){
        nestedLabel.firstChild.textContent=label;
        button.replaceChildren(icon,nestedLabel);
      }else{
        button.replaceChildren(icon,document.createTextNode(label));
      }
      const rowLink=button.closest('article')?.querySelector('h3 a[data-page]');
      const owner=meta||(rowLink?projectMeta[rowLink.dataset.page]:null);
      button.dataset.previewFile=(owner?owner.title+' · ':'')+label;
      button.setAttribute('aria-label',label+(owner?': '+owner.title:''));
    });
    const heading=content.querySelector('.hs-index h1');
    if(heading)heading.textContent=heading.textContent.replace(/\.$/,'');
  }

if(secondary[page]) populateSecondary(page);
if(projectMeta[page]) {
const period=document.createElement('small');period.className='hs-duration';period.textContent=projectMeta[page].date;content.querySelector('.hs-detail-facts>div').append(period);
const methods=document.createElement('p');methods.className='hs-detail-methods';methods.textContent=projectMeta[page].methods;content.querySelector('.hs-detail-hero').append(methods);
}
alignProjectLabels(page);refineTypography();
}
