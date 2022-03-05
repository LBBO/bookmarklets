import { Component } from '@angular/core'
import { Bookmarklet, functionToBookmarkletUrl } from '../Bookmarklet'
import { blackscreen } from '../../bookmarklets/blackscreen'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { getChangeMediaSpeed } from '../../bookmarklets/mediaSpeed'
import { wordCounter } from '../../bookmarklets/wordCounter'

@Component({
  selector: 'app-bookmarklets',
  templateUrl: './bookmarklets.component.html',
  styleUrls: ['./bookmarklets.component.scss'],
})
export class BookmarkletsComponent {
  readonly bookmarklets: Bookmarklet[] = [
    {
      name: 'Change media speed',
      description:
        "This lets you change almost any video's or audio's playback speed in the entire internet",
      func: getChangeMediaSpeed,
    },
    {
      name: 'Blackscreen',
      description: 'This will turn the active window into a black screen',
      func: blackscreen,
    },
    {
      name: 'Word counter',
      description:
        'Select some text on a website and then run this bookmarklet. It will tell you how many words are' +
        ' included in your selection',
      func: wordCounter,
    },
  ]

  readonly bookmarkletsWithUrls: (Bookmarklet & { url: SafeUrl })[]

  constructor(private sanitizer: DomSanitizer) {
    this.bookmarkletsWithUrls = this.bookmarklets.map((bookmarklet) => ({
      ...bookmarklet,
      url: this.sanitizer.bypassSecurityTrustUrl(
        functionToBookmarkletUrl(bookmarklet.func),
      ),
    }))
  }
}
